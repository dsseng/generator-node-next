---
title: Using Travis CI
lang: en-US
description: How to use Travis CI in your project
---

# Using Travis CI
![Travis CI logo](https://bitworks.software/assets/img/products/travis-ci.png)
If you have enabled Travis CI when creating your project, you will have a `.travis.yml` file in the root directory of your app.
To test your app with Travis CI, you should upload your app to GitHub and enable Travis CI for the repo.

::: tip
You can read more about testing Node apps with Travis CI [here](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
:::

To test with latest node version, add this to `node_js` section of the `.travis.yml`

```yaml
- node # Latest Node.js version
- lts/* # Latest Node.js LTS version
```
