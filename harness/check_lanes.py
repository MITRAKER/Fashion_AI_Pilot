#!/usr/bin/env python3
"""
harness/check_lanes.py
The enforcement layer. Runs on every commit via the pre-commit hook.
Agents declare identity with a commit trailer:  Agent: JIRO | ANT | BACH | RAPHAEL
Rules here are hard. If a rule fails, the commit is rejected with exit code 1.
Markdown instructs the agents. This file constrains them.
"""

import re
import subprocess
import sys

AGENTS = {"JIRO", "ANT", "BACH", "RAPHAEL", "NATALIE"}

# Raphael's exclusive lane. Any staged change matching these patterns
# requires Agent: RAPHAEL (or NATALIE working by hand).
DESIGN_PATTERNS = [
    r"\.css$",
    r"\.scss$",
    r"tokens?\.(ts|js|json)$",
    r"theme\.(ts|js|json)$",
    r"tailwind\.config\.(ts|js)$",
    r"fonts?/",
    r"styles?/",
]

# Ant is read-only. Any staged file at all under Agent: ANT is a violation.

# Secret patterns. A hit anywhere in staged content rejects the commit,
# no matter which agent is committing. This is Ant's automated layer.
SECRET_PATTERNS = [
    (r"sk-ant-[A-Za-z0-9\-_]{20,}", "Anthropic API key"),
    (r"sk-[A-Za-z0-9]{40,}", "OpenAI-style API key"),
    (r"pplx-[A-Za-z0-9]{20,}", "Perplexity API key"),
    (r"AKIA[0-9A-Z]{16}", "AWS access key"),
    (r"(?i)(api[_-]?key|secret|token|password)\s*[:=]\s*['\"][^'\"\s]{16,}['\"]",
     "Hardcoded credential assignment"),
    (r"-----BEGIN (RSA |EC )?PRIVATE KEY-----", "Private key material"),
]

FORBIDDEN_FONT = re.compile(r"(?i)times\s*new\s*roman")


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True).stdout


def fail(msg):
    print(f"\nHARNESS REJECTED THIS COMMIT\n{'=' * 40}\n{msg}\n{'=' * 40}")
    print("Fix the violation and commit again. The harness does not negotiate.")
    sys.exit(1)


def get_agent():
    """Agent identity comes from the AGENT environment variable or the
    prepared commit message trailer. Environment variable wins."""
    import os
    agent = os.environ.get("AGENT", "").strip().upper()
    if agent:
        return agent
    # fall back to the commit message file git passes to hooks
    if len(sys.argv) > 1:
        try:
            with open(sys.argv[1], encoding="utf-8") as f:
                m = re.search(r"^Agent:\s*(\w+)\s*$", f.read(),
                              re.MULTILINE | re.IGNORECASE)
                if m:
                    return m.group(1).upper()
        except OSError:
            pass
    return ""


def staged_files():
    out = run(["git", "diff", "--cached", "--name-status"])
    files = []
    for line in out.strip().splitlines():
        parts = line.split("\t")
        status, path = parts[0], parts[-1]
        files.append((status, path))
    return files


def staged_content(path):
    return run(["git", "show", f":{path}"])


def main():
    agent = get_agent()
    files = staged_files()

    if not files:
        sys.exit(0)

    # Rule 0: identity is mandatory.
    if agent not in AGENTS:
        fail("No valid agent identity. Set AGENT=JIRO|ANT|BACH|RAPHAEL|NATALIE\n"
             "or include a commit trailer line:  Agent: JIRO")

    violations = []

    for status, path in files:
        # Rule 1: no deletions or renames without explicit human action.
        if status.startswith(("D", "R")) and agent != "NATALIE":
            violations.append(
                f"{path}: deletion/rename by {agent}. "
                "Only NATALIE deletes or renames.")

        # Rule 2: Ant is read-only. Everywhere. Always.
        if agent == "ANT":
            violations.append(
                f"{path}: ANT staged a file change. Ant never edits. "
                "Ant reports; JIRO or BACH implements.")
            continue

        # Rule 3: the design lane belongs to Raphael.
        in_design_lane = any(re.search(p, path) for p in DESIGN_PATTERNS)
        if in_design_lane and agent not in ("RAPHAEL", "NATALIE"):
            violations.append(
                f"{path}: design-lane file changed by {agent}. "
                "CSS, tokens, fonts, styles belong to RAPHAEL only.")

        # Content checks on added/modified text files.
        if status.startswith(("A", "M")):
            try:
                content = staged_content(path)
            except Exception:
                continue
            for pattern, label in SECRET_PATTERNS:
                if re.search(pattern, content):
                    violations.append(
                        f"{path}: {label} detected in staged content. "
                        "Secrets never enter this repository.")
            if FORBIDDEN_FONT.search(content) and path.endswith(
                    (".css", ".scss", ".html", ".tsx", ".jsx", ".ts", ".js")):
                violations.append(
                    f"{path}: Times New Roman referenced. "
                    "Forbidden in this repository under any circumstances.")

    if violations:
        fail("\n".join(f"  - {v}" for v in violations) +
             f"\n\nAgent: {agent} | Files checked: {len(files)}")

    print(f"Harness: PASS. Agent {agent}, {len(files)} file(s) within lane.")
    sys.exit(0)


if __name__ == "__main__":
    main()
