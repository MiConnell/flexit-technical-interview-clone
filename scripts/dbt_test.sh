#!/bin/bash
cd dbt
dbt test --profiles-dir ./ -s `git diff --name-only --cached | sed "s/$/+/g" | egrep '(\.sql\+$|\.py\+$)' | sed 's/dbt\///' | tee >([ $(wc -m) -gt 0 ] || echo 'Nothing_to_do')`
