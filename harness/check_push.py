#!/usr/bin/env python3
"""
harness/check_push.py
Runs on every push via the pre-push hook. Two jobs:
1. No push ever reaches main from this machine. GitHub branch protection is
   the second wall; this is the first, and it fires before the network.
2. Branch names follow the convention: feature/<name>, fix/<name>, or docs/<name>.
"""

import re
import subprocess
import sys

ALLOWED_BRANCH = re.compile(r"^(feature|fix|docs)/[a-z0-9][a-z0-9\-]*$")


def fail(msg):
    print(f"\nHARNESS REJECTED THIS PUSH\n{'=' * 40}\n{msg}\n{'=' * 40}")
    sys.exit(1)


def main():
    branch = subprocess.run(
        ["git", "rev-parse", "--abbrev-ref", "HEAD"],
        capture_output=True, text=True).stdout.strip()

    if branch in ("main", "master"):
        fail("Direct push to main is forbidden. No agent, no human, no exception.\n"
             "Create a feature branch and open a pull request.")

    # stdin gives git's ref lines: local_ref local_sha remote_ref remote_sha
    for line in sys.stdin:
        parts = line.split()
        if len(parts) >= 3 and parts[2].endswith(("/main", "/master")):
            fail(f"This push targets {parts[2]}. Pushing to main is forbidden\n"
                 "even from a local branch. Open a pull request instead.")

    if not ALLOWED_BRANCH.match(branch):
        fail(f"Branch name '{branch}' breaks convention.\n"
             "Use feature/<name>, fix/<name>, or docs/<name>,\n"
             "lowercase, hyphens only, no spaces. Spaces in paths cost us\n"
             "enough on Hyperscale.")

    print(f"Harness: push allowed from branch '{branch}'.")
    sys.exit(0)


if __name__ == "__main__":
    main()
