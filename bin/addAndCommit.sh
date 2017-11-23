#!/bin/bash

git add src docs bin notorious-7ebdf-export.json package.json
echo "Please enter the description for your commit, without the 'MVI2: ' prefix: "
read commitMsg
git commit -m "MVI2: "$commitMsg
