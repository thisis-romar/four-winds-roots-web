---
title: "Claude Code Hook Audit — Four Winds Roots Pharmacy"
description: "Catalog of Claude Code hooks now active in this project after the 2026-05-28 port from claude-conversation-reader."
version: 1.0.0
created: 2026-05-28T14:32:33Z
last_updated: 2026-05-28T14:32:33Z
---

# Claude Code Hook Audit — Four Winds Roots Pharmacy

Snapshot taken 2026-05-28 during the post-deploy cleanup work. Before this audit the project had **zero** Claude hooks configured. Two were added by porting the canonical implementations from `claude-conversation-reader`.

## 1. Project Claude hooks — `.claude/settings.json`

| Event | Matcher | Command | Timeout | Behavior |
|---|---|---|---|---|
| `Stop` | `""` (all stops) | `bash .githooks/stop-git-check.sh` | default | Exit-2 if there are uncommitted, untracked, or unpushed changes. Surfaces a "Do not create a PR unless asked" reminder. |
| `PostToolUse` | `Edit\|Write` | `bash .githooks/post-edit-update.sh` | 10s | If the file has a real content change (timestamp-stripped diff), bumps the `last_updated:` line in YAML frontmatter (markdown files) or `@lastUpdated` line in JSDoc (TS/JS files) to current UTC, then stages the file. |

Both hooks early-exit gracefully if there's no git repo, no file path, or no real diff.

## 2. Why these two hooks specifically

This project hand-bumped its README's `last_updated` field twice during the 2026-05-28 deploy fix work. That's exactly the friction the post-edit hook removes — frontmatter versioning is now automatic on every meaningful edit.

Stop-git-check matches the project's actual workflow: most "stop" moments here happen after a `git push` already shipped a deploy, so the hook is silent for that case. When it fires, it's because something was actually missed — see the four-day gap where `netlify.toml` changes weren't pushed.

## 3. Global user hooks — `~/.claude/settings.json`

Inherited from the user-scope settings (also apply here):

- `SessionStart` PowerShell hook injects current UTC time
- `SessionStart *` + `PostToolUse Write` + `PostToolUse *` run `recall.mjs` for context restoration

These fire in addition to the project-local hooks above.

## 4. Skipped on purpose

- **No `PreToolUse` hooks.** The auto-mode classifier already gates risky actions (we hit it twice this week — Netlify credential read, prod deploy). Adding another layer is overkill.
- **`prepare-commit-msg` / `pre-commit` / `pre-push`** are NOT added here. CCR has them in its `.githooks/` but they're inert unless `core.hooksPath` is set, and this project hasn't needed message rewriting yet. If we later add Husky-style lint-on-commit, this is where it'd go.

## 5. How to verify the hooks are firing

After installing this stack:

```powershell
# 1. Stop hook test — make a small uncommitted change, then in a fresh
#    Claude Code session at this directory try to stop. Should print
#    "There are uncommitted changes...".

# 2. PostToolUse hook test — edit any tracked .md or .ts file via Claude.
#    Inspect the file's last_updated/@lastUpdated header — should be
#    the current UTC timestamp. Also git status should show it staged.
```

## 6. Related files

- `.githooks/stop-git-check.sh` — Stop-event implementation (v1.0.0, ported from CCR v1.1.0)
- `.githooks/post-edit-update.sh` — PostToolUse implementation (v1.0.0, ported from CCR v1.1.0)
- `.claude/settings.json` — wiring
- `README.md` — first file these hooks will start auto-bumping
