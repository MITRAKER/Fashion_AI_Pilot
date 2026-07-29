# JIRO SYNC
Purpose: bring Mitra's latest main into this branch. Run at the START
of every session, before any work.
1. git status. If the working tree is not clean, STOP and report.
2. git fetch origin
3. git merge origin/main
4. If the merge succeeds, report what came in: git log HEAD@{1}..HEAD --oneline
5. If there are conflicts, STOP immediately. List the conflicted files.
   Do not resolve anything. Conflict resolution is Natalie's decision.
6. STOP.
