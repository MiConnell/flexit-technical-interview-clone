#!/bin/bash
sqlfluff fix -f --config ./.sqlfluff --dialect bigquery `git diff --name-only --cached | egrep '\.sql' | tee >([ $(wc -m) -gt 0 ] || echo 'Nothing_to_do')`
