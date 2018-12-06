---
title: Customize TSLint config
lang: en-US
description: How to customize TSLint config
---

# Customize TSLint config
::: warning
TSLint is only available for TS projects. For JS projects, look at [ESLint guide](eslint.md).
:::
In TS project you will have `tslint.json` file. You can enable/disable rules, use plugins and do many other things using `tslint.json` file.

## Add plugin (Prettier)
1. Run `npm install --save-dev tslint-plugin-prettier prettier` or `yarn add --dev tslint-plugin-prettier prettier`
2. Add this code to `tslint.json`:
  ```json
  "rulesDirectory": ["tslint-plugin-prettier"],
  "rules": {
    "prettier": true
  }
  ```
3. Fix your code: `npm run test:lint --fix` or `yarn test:lint --fix`
