#!/bin/bash

echo "\n🔍 Checking import case issues..."

errors=0

while IFS= read -r line
do
  file=$(echo "$line" | cut -d':' -f1)
  import_path=$(echo "$line" | grep -o "from '.*'" | cut -d"'" -f2)

  if [[ $import_path == ./* ]]; then
    full_path=$(dirname "$file")/${import_path}.js
    if [ ! -f "$full_path" ] && [ ! -f "$full_path"x ]; then
      echo "❌ Import not matched (case issue?): $file → $import_path"
      ((errors+=1))
    fi
  fi

done < <(grep -rn "from './" src)

if [ "$errors" -ne 0 ]; then
  echo "\n⚠️  Case-sensitive import issues found. Please fix them before deployment."
  exit 1
else
  echo "✅ No import case issues found."
fi
