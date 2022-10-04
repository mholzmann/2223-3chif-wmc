# Introduction to TypeScript

## Pros and Cons of JavaScript

- JS is great because of
  - its reach (JavaScript is everywhere)
  - available libraries (for server and client)
- JS (sometimes) sucks because of missing types
  - limited editor support (IntelliSense, refactoring)
  - runtime errors instead of compile-time errors

## What is TypeScript?

- TypeScript = JavaScript + Static Typing
  - so it is a **superset** of JavaScript
  - valid JavaScript is (mostly) valid TypeScript
- TypeScript compiles (more correctly: **transpiles**) into JavaScript
  - you get **compile-time** errors instead of runtime errors
- TypeScript allows great tool support
  - e. g. in Visual Studio Code, IntelliJ WebStorm

<!---->

![img](pics/ts-as-superset.png)

## Using the TypeScript compiler

- Install TypeScript globally (so it's available for all projects):

  ```bash
  $ npm install -g typescript
  ```

- Check the installed TypeScript version:

  ```bash
  $ tsc --version
  ```

- Compile a TypeScript file to JavaScript (ES 6):

  ```bash
  $ tsc app.ts --target es6
  ```

- The result is the file `app.js`. Run it, as usual:

  ```bash
  $ tsc app.ts --target es6
  ```

## Basic Types

- Some of the primitive types, which exist in JavaScript **and** TypeScript, are:
  - `boolean`
  - `string`
  - `number`
  - `undefined`

<!---->

- In TypeScript we can use additionally:
  - `any` or `unknown`
    - both signal, that the real type is not known at compile-time
    - `unknown` is the type-safe counterpart of `any`
      - no operations are permitted on an unknown without first narrowing to a more specific type
  - `void`
    - signals that there is no type at all
    - used for functions without a return value
    <!---->

> ❗**Please note:** 
>
> - `String`, `Number` and `Boolean` (starting with capital letter) refer to special built-in types.
> - Always use `string`, `number` or `boolean` as types!

