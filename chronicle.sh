#\!/bin/sh
# Appends a session entry to HISTORY.md. Run at the end of every session.
BRANCH=$(git rev-parse --abbrev-ref HEAD)
DATE=$(date "+%Y-%m-%d %H:%M")
BEHIND=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo "?")
AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo "?")
{
  echo ""
  echo "## Session $DATE"
  echo "Branch: $BRANCH | Ahead of main: $AHEAD | Behind main: $BEHIND"
  echo "Commits this session:"
  git log origin/main..HEAD --oneline --since="12 hours ago" | sed 's/^/  - /'
  echo "Files changed vs main:"
  git diff --stat origin/main..HEAD | tail -1 | sed 's/^/  /'
  echo "---"
} >> HISTORY.tmp && cat HISTORY.md >> HISTORY.tmp 2>/dev/null
# newest first: entry goes above prior log, below the header
head -4 HISTORY.md > HISTORY.new
tail -n +5 HISTORY.tmp >> HISTORY.new 2>/dev/null || cat HISTORY.tmp >> HISTORY.new
mv HISTORY.new HISTORY.md && rm -f HISTORY.tmp
echo "Chronicle entry written for $DATE on $BRANCH."
