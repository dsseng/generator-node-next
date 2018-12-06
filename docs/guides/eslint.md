---
title: Customize ESLint config
lang: en-US
description: How to customize ESLint config
---

# Customize ESLint config
![ESLint logo](https://eslint.org/img/logo.svg)
::: warning
ESLint is only available for JS projects. For TS projects, look at [TSLint guide](tslint.md).
:::
In JS project you will have `.eslintrc` and `.eslintignore` files. You can enable/disable rules, use plugins and do many other things using `.eslintrc` file. If you want ESLint not to lint some files or directories, add them to `.eslintignore` file.

## Add plugin (Prettier)
1. Run `npm i -D eslint-plugin-prettier prettier` or `yarn add -D eslint-plugin-prettier prettier`
2. Add this code to `.eslintrc`:
  ```json
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
  ```
3. Fix your code: `npm run test:lint --fix` or `yarn test:lint --fix`
