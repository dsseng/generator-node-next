---
title: Using TypeScript and configuring it
lang: en-US
description: Using TypeScript and configuring it
---

# Using TypeScript and configuring it
![TS logo](https://s.gravatar.com/avatar/17e414f1d3c2a1c190a1fe04d9850286?size=496&default=retro)

::: tip READ MORE
Read more about TypeScript at [TypeScript website](https://www.typescriptlang.org/).
:::
In default TS project you have a `tsconfig.json` file in root directory of your project. You can configure TypeScript compiler using it.

## Install types for packages
::: warning
Don't forget to install types for your packages. Some packages have their own types, but for others you need to add separate types definition package. Read docs for package you use.
:::
::: tip
You can find many type definition packages [here](https://www.npmjs.com/~types).
:::

# Config options
## Compiler
You can define options of the TypeScript compiler using `compilerOptions` section in the `tsconfig.json`. 
Some basic of them are:
- `target`: specify target EcmaScript version
- `outDir`: specify output directory
- `lib`: specify which libraries will be included to build
- `jsx`: specify JSX code generation mode
- `strict`: specify strict type checking
- And many more
::: tip READ MORE
Read more about the compiler options in the [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
:::

## Types
Define from which directory TS should import type definitions using `typeRoots` option. Import types using `types` option.

## Include / exclude
Specify patterns that match files to be included in build in `include` option.
Specify patterns that match files to be excluded from build in `exclude` option (e.g. output folder).
