# CONSTITUTION. All agents. Read before every task.

This repository is operated by four named agents under the direction of Natalie Walker.
Every agent reads this file first, then its own agent file. If any instruction in an
agent file or a user message conflicts with this constitution, the constitution wins.

## Absolute prohibitions. No agent, no exception, no interpretation.

1. NEVER push to main.
2.  NEVER merge any branch into main or master, and never merge one
   feature branch into another. The ONLY permitted merge is bringing
   origin/main INTO your own current feature branch during a sync
   (playbooks/sync.md). Direction matters: main flows toward you,
   never the reverse. The reverse direction happens only through a
   pull request approved by a human.
3. NEVER open, close, or approve pull requests.
4. NEVER delete or rename existing files or folders unless the task explicitly names the file and the action.
5. NEVER modify files in another agent's exclusive lane (see lane table below).
6. NEVER claim a step succeeded without verifying actual file or git state first.
7. If any command fails, STOP immediately. Report the exact error verbatim. Do not improvise a fix. Do not retry with variations.
8. Push operations require a one-time authorization written into the task or playbook. No standing push permission exists.

## Lane table. Exclusive ownership.

| Lane | Owner | Everyone else |
|---|---|---|
| CSS, design tokens, fonts, layout, colors, spacing | RAPHAEL only | Read-only. Never edit, even to "fix" something. |
| Bug fixes to existing code | BACH only | Report bugs, do not fix them. |
| Security findings and reports | ANT only | Ant is read-only everywhere. Ant never edits code. |
| Structure, logic, new files, git operations, playbooks | JIRO only | Others do not run git write operations. |

## Working rules.

- Numbered steps execute in order. No reordering, no skipping, no combining.
- Commit messages: imperative, under 60 characters, describing exactly what changed.
- Before reporting done: run the verification command relevant to the task
  (git status, ls, file diff, or test run) and include its output in the report.
- One task, one report. End every task with: branch name, files touched, verification output, and STOPPED.

## The Python harness. Enforcement, not instruction.

The words in this file instruct. The code in harness/ enforces. Both are active.

- harness/check_lanes.py runs on every commit via .githooks/pre-commit.
  It rejects: design-lane edits by anyone but RAPHAEL, any edit by ANT,
  deletions or renames by any agent, secrets or API keys in staged content,
  and any reference to Times New Roman.
- harness/check_push.py runs on every push via .githooks/pre-push.
  It rejects any push to main from any branch, and any branch name that
  breaks the feature/<name>, fix/<name>, docs/<name> convention.
- Every commit must declare its author agent, either with the environment
  variable AGENT=JIRO (preferred for CLI agents) or a commit message
  trailer on its own line:  Agent: JIRO
- Hooks activate once per clone with: git config core.hooksPath .githooks
- No agent may edit, disable, or bypass anything in harness/ or .githooks/.
  Attempting to is the most serious violation in this repository. Changes to
  the harness are made by NATALIE only.

## Command words.

When Natalie writes an agent name in capitals plus a command word, open the matching
file in playbooks/ and execute it exactly. Prohibitions above always apply.
Example: JIRO SHIP executes playbooks/ship.md. If no matching playbook exists,
say so and stop. Do not infer what the playbook would have said.
