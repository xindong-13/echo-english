@echo off
setlocal enabledelayedexpansion
title Echo English - GitHub Pages Setup
cd /d "%~dp0"

echo.
echo ==================================================
echo   Echo English  -  Deploy to GitHub Pages
echo ==================================================
echo.

if not exist "index.html" (
  echo   [ERROR] index.html not found.
  pause & exit /b
)

rem ---------- 1. git ----------
where git >nul 2>nul
if errorlevel 1 (
  echo   [ERROR] Git not installed.
  echo.
  echo     1. Browser opens at https://git-scm.com/download/win
  echo     2. Download and install (Next on everything)
  echo     3. RESTART this .bat
  echo.
  start "" https://git-scm.com/download/win
  pause & exit /b
)
echo   [1/6] git found:
git --version
echo.

rem ---------- 2. GitHub CLI ----------
where gh >nul 2>nul
if errorlevel 1 (
  echo   [2/6] Installing GitHub CLI...
  winget install --id GitHub.cli -e --accept-package-agreements --accept-source-agreements
  echo.
  echo   If failed, install manually from https://cli.github.com
  echo   Then CLOSE this window and run this .bat again.
  echo.
  where gh >nul 2>nul
  if errorlevel 1 ( start "" https://cli.github.com & pause & exit /b )
) else (
  echo   [2/6] GitHub CLI found.
)
echo.

rem ---------- 3. login ----------
echo   [3/6] GitHub login
gh auth status >nul 2>nul
if errorlevel 1 (
  echo         A browser will open. Sign in, then Authorize.
  echo         Choose:  GitHub.com  ^>  HTTPS  ^>  Login with a web browser
  echo.
  gh auth login
) else (
  echo         Already logged in.
)
gh auth setup-git >nul 2>nul
for /f "delims=" %%i in ('gh api user -q .login 2^>nul') do set "GHUSER=%%i"
if "%GHUSER%"=="" (
  echo.
  echo   ------------------------------------------------
  echo   [ERROR] Login failed.
  echo.
  echo   If you saw 503 Service Unavailable, try again.
  echo   Still failing? Run: GitHub-用權杖登入.bat
  echo   ------------------------------------------------
  echo.
  pause & exit /b
)
echo         Signed in as: %GHUSER%
echo.

rem ---------- 4. repo name ----------
set "REPO=echo-english"
echo   [4/6] Repository name
echo         Press Enter for default: %REPO%
set /p "REPO=  Repository name [%REPO%]: "
if "%REPO%"=="" set "REPO=echo-english"
echo         Using: %REPO%
echo         URL will be: https://%GHUSER%.github.io/%REPO%/
echo.

rem ---------- 5. git init + push ----------
echo   [5/6] Uploading files...
call :GITIGNORE
if not exist ".git" (
  git init >nul
  git branch -M main >nul 2>nul
)
git config user.name >nul 2>nul || git config user.name "%GHUSER%"
git config user.email >nul 2>nul || git config user.email "%GHUSER%@users.noreply.github.com"
git add -A >nul
git commit -m "Publish Echo English to GitHub Pages" >nul 2>nul
gh repo create %REPO% --public --source=. --remote=origin --push
if errorlevel 1 (
  echo.
  echo   [note] repo create failed - maybe it already exists.
  echo          Trying to push to the existing repository...
  git remote remove origin >nul 2>nul
  git remote add origin https://github.com/%GHUSER%/%REPO%.git
  git push -u origin main
  if errorlevel 1 goto FAIL
)
echo.

rem ---------- 6. turn on Pages ----------
echo   [6/6] Turning on GitHub Pages...
gh api -X POST repos/%GHUSER%/%REPO%/pages -f "source[branch]=main" -f "source[path]=/" >nul 2>nul
if errorlevel 1 (
  gh api -X PUT repos/%GHUSER%/%REPO%/pages -f "source[branch]=main" -f "source[path]=/" >nul 2>nul
)
echo         Done.
echo.

echo %GHUSER%/%REPO%> github-url.txt
echo https://%GHUSER%.github.io/%REPO%/>> github-url.txt

echo ==================================================
echo   SUCCESS!
echo.
echo   Your URL:
echo       https://%GHUSER%.github.io/%REPO%/
echo   (also saved to github-url.txt)
echo.
echo   First build takes 1-2 minutes.
echo   If you get 404, wait a minute and refresh.
echo.
echo   To update later, run: GitHub-一鍵更新.bat
echo ==================================================
echo.
pause
start "" https://%GHUSER%.github.io/%REPO%/
exit /b

:GITIGNORE
if not exist ".nojekyll" copy nul ".nojekyll" >nul
if exist ".gitignore" exit /b
> .gitignore echo # Files to ignore
>> .gitignore echo .deploy/
>> .gitignore echo .netlify/
>> .gitignore echo node_modules/
>> .gitignore echo.
>> .gitignore echo # Personal data
>> .gitignore echo backups/
>> .gitignore echo *backup*.json
exit /b

:FAIL
echo.
echo   [ERROR] Upload failed.
echo           Check connection, or run: gh auth login
echo.
pause & exit /b
