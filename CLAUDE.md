# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Echo 英語 (Echo English) is a single-user, offline-first PWA for English sentence/speaking practice. It is a **pure static site with no build tooling** — no `package.json`, no bundler, no test runner. All app logic lives in one hand-written HTML file plus three data files (`bank.js`, `words.js`, `articles.js`).

## Commands

There is no build/lint/test step. Development is just editing the files directly and reloading in a browser (the service worker requires an http(s) origin, not `file://`, so serve the folder with any static server to test offline/update behavior, e.g. `npx serve` or Python's `http.server`).

Deployment is via three Windows batch scripts (already tracked in git) that wrap `git`/`gh`:

- `setup.bat` — one-time: creates/pushes to a GitHub repo and turns on GitHub Pages.
- `update.bat` — routine update: bumps the cache version (calls `bump-version.ps1`), commits, and pushes. **This is how normal changes ship.**
- `token-login.bat` — fallback GitHub CLI login when the normal browser OAuth flow 503s.

`bump-version.ps1` is invoked automatically by `update.bat`; don't run it by hand unless debugging the version-bump logic itself.

**Do not add Traditional Chinese (or any non-ASCII) text inside these `.bat` files.** This was verified to break cmd.exe's parser under this system's default Big5 (950) console codepage — even `chcp 65001` inside the script does not reliably fix it — and can crash the script before it produces any output. Keep `.bat` content pure ASCII; put Chinese-language docs in the `.md` files instead.

## Versioning — required on every change

`sw.js` caches all app assets by a version string (`const CACHE = 'echo-vN'`), and `index.html` mirrors it (`const APPVER='echo-vN'`). **If these two don't get bumped together, phones will keep serving the stale cached version and never see the update prompt.** `update.bat`/`bump-version.ps1` does this automatically by incrementing the number in both files — if you edit files without going through `update.bat`, bump both manually before shipping. `bump-version.ps1` finds these lines by regex (`const CACHE = 'echo-vN'` at line start in `sw.js`, `const APPVER='echo-vN'` in `index.html`) and silently skips if they don't match, so keep that exact shape when touching them.

## Architecture

Everything user-facing is in **`index.html`** (~3400 lines: markup, CSS, and all JS in one file), organized into clearly marked `/* ===== */` sections in this order:

1. **主程式 (bootstrap/state)** — global mutable state object `S`, persisted to `localStorage` (key `echo.v1`) and mirrored into IndexedDB (`echoDB`) for redundancy against Safari clearing site data. `load()`/`migrate()` handle upgrading old saved-state shapes forward; `save()` writes both stores. `DEFAULT` is the canonical state shape (progress, custom sentences, wrong-answer log, sync settings, per-mode daily goals, etc.) — extend this object (and `migrate()`) when adding persisted fields. `EPOCH` is a one-shot "reset all sentence progress" switch: bumping it makes `migrate()` clear `prog`/`wrong`/`pass`/`scores` on next load (keys, settings, custom sentences, articles, streak kept), and `mergeState()` discards progress from a sync peer on an older epoch so the reset isn't undone by another device.
2. **雲端同步 (Supabase sync)** — fully optional, bring-your-own Supabase project. `syncPayload()`/`mergeState()` reconcile local vs. remote state (tombstones deleted items via `S.wrongGone` / `S.trashGone` / `S.artGone` so deletes propagate instead of resurrecting). The Supabase table schema is embedded as a SQL string (`SQL_SNIPPET`) shown to the user to paste into their own SQL editor — there is no backend of ours.
3. **文字比對評分 (answer scoring)** — custom token-level diff against the reference sentence (`tokens`, `lev` = Levenshtein, `compare`/`bestCompare`), not an external grading API. Checks against the canonical sentence plus any AI-approved alternate phrasings cached per-sentence in `S.alts`.
4. **進度／過關 (pass & graduate)** — `grade()` only tracks seen/best/lapses (the old SM-2 SRS was removed). Each of the four sentence modes (`SENT_MODES`) is passed by scoring ≥`PASS_AT` (90) on the first try in a round (not after peeking), or by an AI "same meaning" judgement in translate mode; recorded in `S.pass[id][mode]`. All four passed → `isDone()` ("graduated"), excluded from `pool()` forever. Rounds only draw sentences not yet passed in the current mode. Wrong answers auto-file into `S.wrong` and clear after two consecutive scores ≥85 or on graduation. **Trash bin** (`S.trash`): user-flagged items (sentences or `w:`-prefixed words) are hidden; each entry snapshots `en`/`zh`, and `trashAutoRestore()` at boot puts an item back automatically once its text in `bank.js`/`words.js` differs (i.e. it was fixed) — so to "fix" a trashed item, just edit its text and keep its id.
5. **語音 (speech)** — `speak()` via `speechSynthesis` (accent/rate configurable), `listen()` via `SpeechRecognition`/`webkitSpeechRecognition`, with a typed-answer fallback path when mic/recognition isn't available.
6. **AI (dual provider)** — `PROVIDERS` supports Google Gemini (free tier) and Anthropic Claude (paid); the user supplies their own API key per provider, stored client-side only. `callGemini`/`callAnthropic` call the vendor APIs **directly from the browser** — there is no proxy/backend. Powers: alternate-phrasing judgment, per-sentence critique, scenario roleplay chat, free-chat + end-of-session report, and AI-generated new sentences. Results (accepted alternate phrasings, generated sentences) are cached into `S` so they keep working offline afterward.
7. **分頁切換 / 練習 (tabs / practice flow)** — `MODES` defines five practice modes (`translate`, `listen`, `cloze`, `build`, plus `vocab`), each with its own independent daily-goal counter under `S.set.goals`. `vocab` is word-only multiple choice (en→zh / zh→en) from `words.js`, with an adaptive level in `S.voc` (+10 right / −20 wrong, 100 = level up, <0 = level down; ~75% of questions from the current level, rest from lower levels); it doesn't touch `S.prog`/`S.wrong`/`S.pass`. `pool()`/`allItems()` filter/merge the built-in bank with user/AI-added sentences for the current category/scene/level filters.
8. **AI 導師 (tutor: critique + scenario chat)** — per-sentence AI critique and multi-turn roleplay/chat, separate from the core scoring pipeline.
9. **閱讀：長文章 (reading tab)** — `renderRead`/`renderArticle` with four sub-tabs: read (tap-to-speak, read-all, zh toggle), shadow (per-sentence `compare()` scoring, weak sentences can be added to `S.custom`), quiz, and AI summary critique. Also AI article generation and paste-your-own-article (local `splitSentences`, optional AI translation). Not one of `MODES`/daily goals; it only touches the streak via `touchStreak()`.
10. **題庫 (sentence library browser)**, **我的 (settings/profile: AI provider config, goals, backup/restore, sync setup)**, **底部彈出面板 (bottom sheet modal)**, **啟動 (final bootstrap)**.

**Data files:**
- `bank.js` — built-in sentence bank, one `window.BANK` array of `{id, en, zh, cat, sc, lv, note, bl?}` (1225 sentences: daily 590 / travel 390 / vocab 245; the former bank2–5.js were merged into it). `id` prefix is `d`/`t`/`v` for daily/travel/vocab; keep new ids past the current max per prefix to avoid collisions — check with e.g. `grep -oE 'id:"[a-z][0-9]+"' bank.js`. Never change an existing id (progress, pass records and trash entries are keyed by it). Adding sentences by hand means editing this file directly (user/AI-added sentences instead go into `S.custom`, which needs no file edit or redeploy).
- `words.js` — vocab-mode word list, `window.WORDS` array of `[en, pos, zh, level]`, levels 1–6 following the 大考中心 7000-word Level 1–6 scheme. Word ids are `'w:'+en`, so don't rename a word you only mean to fix — edit its `zh`. Any new static data file must also be added to `sw.js`'s `ASSETS` array and to `使用說明.md`'s file list.
- `articles.js` — built-in long-form reading articles for the 閱讀 tab, `window.ARTICLES` array of `{id:'aNN', title, zh, genre, lv, paras:[[[en,zh],…],…], vocab:[[word,zh]], qs:[{q,zh,o:[…],a}]}` — paragraphs are pre-split into sentence pairs because tap-to-speak, read-aloud highlighting, and shadowing scoring all work per sentence. AI-generated and user-pasted articles use the same shape in `S.articles` (deletions tombstoned in `S.artGone`), reading progress in `S.reads`.
- `sw.js` — its `ASSETS` array is the precache list; any new static file the app needs offline (not just bank files) must be added there. Network-first service worker with cache fallback; deliberately does **not** call `skipWaiting()` automatically on install, only when the user taps the update prompt, so an in-progress practice round is never disrupted mid-session.

**Deployment model:** static files only, served via GitHub Pages (primary, via the `.bat` scripts; `setup.bat` writes the repo slug and live URL into `github-url.txt`, currently `xindong-13/echo-english` → https://xindong-13.github.io/echo-english/; `.nojekyll` makes Pages serve files as-is) or Netlify Drop (documented as a manual drag-and-drop alternative, no tooling for it in this repo). The repo is **public** — `.gitignore` excludes the user's local backup file (`備份.txt`, contains their live API keys and Supabase credentials); never remove those exclusions or commit anything matching them.

`使用說明.md` at the repo root is Traditional-Chinese end-user documentation for the app's owner, not developer docs, but is a good source of product/feature intent if a change's expected behavior is unclear.
