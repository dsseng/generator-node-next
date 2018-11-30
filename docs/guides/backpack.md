---
title: Customize Backpack config
lang: en-US
description: How to customize Backpack config
---

# Customize Backpack config
![Backpack logo](https://cloud.githubusercontent.com/assets/4060187/21872211/318795e8-d835-11e6-8376-bea370605361.png)

Backpack is minimalistic build system for Node.js.
Backpack comes with the "battery-pack included":
- Latest ES6 features (including module syntax, async/await, object rest spread)
- SUPER friendly, human readable error messages
- Live reload (on saves, add/delete file, etc.)
- Zero-config, one dependency.


You can customize build process of your app using Backpack config file. In TS project `backpack.config.js` is created by default, but in JS project you need to create it by yourself:

```js{2,3}
// backpack.config.js
// IMPORTANT: This file is not going through babel transformation.
// You can however use the ES2015 features supported by your Node.js version.
module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config
    return config;
  },
};
```

With `backpack.config.js` you can add custom plugins or settings to your Webpack config.
::: tip READ MORE
You can read more about `backpack.config.js` [here](https://github.com/jaredpalmer/backpack#custom-configuration).
:::
