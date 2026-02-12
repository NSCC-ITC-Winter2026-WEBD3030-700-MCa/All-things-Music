#!/bin/bash

REGEX="^((Merge[ a-z-]* branch.*)|(Revert.*)|((build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\\(.*\\))?!?: .*))"

MSG="$(cat "$1")"

echo "Commit Message: ${MSG}"

if ! [[ "$MSG" =~ $REGEX ]]; then
  echo >&2 "ERROR: Commit aborted for not following the Conventional Commit standard."
  exit 1
else
  echo >&2 "Valid commit message."
fi
