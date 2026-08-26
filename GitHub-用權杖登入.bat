@echo off
setlocal
title Echo English - GitHub Token Login
cd /d "%~dp0"

echo.
echo ==================================================
echo   Backup login method - use only if browser
echo   login keeps failing (503 / timeout).
echo ==================================================
echo.

where gh >nul 2>nul
if errorlevel 1 (
  echo   [ERROR] GitHub CLI not found. Run setup first.
  pause & exit /b
)

echo   1. Browser opens at token page.
echo   2. Note  = anything, e.g. echo-english
echo      Expiration = 90 days
echo      Scopes, tick these three:
echo            repo
echo            read:org
echo            workflow
echo   3. Click Generate token at the bottom
echo   4. COPY the token (starts with ghp_)
echo      You only see it once.
echo.
pause
start "" https://github.com/settings/tokens/new
echo.
echo   Paste the token below and press Enter.
echo   (Right-click in this window = paste)
echo.
set "TOKEN="
set /p "TOKEN=  Token: "
if "%TOKEN%"=="" (
  echo.
  echo   [ERROR] Nothing pasted.
  pause & exit /b
)

echo.
echo   Logging in...
echo(%TOKEN%|gh auth login --with-token
if errorlevel 1 goto FAIL
gh auth setup-git >nul 2>nul

echo.
gh auth status
echo.
echo ==================================================
echo   If you see "Logged in to github.com" above,
echo   you are done.
echo.
echo   Now close this window and run:
echo       GitHub-第一次設定.bat
echo ==================================================
echo.
pause
exit /b

:FAIL
echo.
echo   [ERROR] Token rejected.
echo           Check you copied the whole token, and that
echo           the repo scope was ticked.
echo.
pause & exit /b
