#!/bin/bash
mv docs build &
npm run deploy
mv build docs &
git add docs/

