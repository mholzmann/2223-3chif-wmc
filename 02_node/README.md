# Introduction to Node.js

## What is JavaScript?

- dynamically typed programming language
- first version in 1995
  - Netscape Browser
- supports different programming philosophies:
  - object-oriented programming
  - functional programming

## What is a JavaScript engine?

- software component which executes JavaScript code
- of course each web browser needs one:
  - Spider-Monkey (Firefox)
  - V8 (Chrome, Edge)
  - JavaScriptCore (Safari)

## What is Node.js?

- a JavaScript runtime
  - executes JavaScript **outside** of a web browser
- main components:
  - [V8 JavaScript engine](https://v8.dev/)
  - [API](https://nodejs.org/dist/latest-v12.x/docs/api/http.html)

**Please note:** Node.js is neither a programming language nor a framework!

## Installation

On [nodejs.org](https://nodejs.org/en/) you find two versions:

- long-term support (LTS)
  - stable version for production applications
  - critical bugs will be fixed for 30 months
- current
  - Version with latest features

**Please note:** To avoid unnecessary problems, we will stick to the LTS version!

Test your Node.js version after installation:

```
node -v
```

## Hello World

Create the file `hello-world.js` with following content:

```javascript
console.log("Hello World!");
```

Afterwards open the directory of `hello.js` in a terminal and type the following command:

```bash
$ node hello-world.js
```

As output you will get:

```bash
> Hello World!
```

**Please note:** You don't have to type the **$** and you won't get a **>** in the output. This prefixes should just help you to distinguish between terminal inputs and outputs. To make it clear you have to type `node hello-world.js` and you will get `Hello World!` as the output.

In the future we will shorten the description of such an example like this:

```bash
$ node hello-world.js
> Hello World!
```

## Applications

There are different use cases for Node.js:

- console applications
  - e.g. [Angular CLI](https://angular.io/cli)
- web applications
  - e.g. [Netflix](https://netflixtechblog.com/tagged/nodejs)
- desktop applications
  - with [Electron framework](https://www.electronjs.org/) (Node.js + Chromium)
  - e.g. [Visual Studio Code](https://code.visualstudio.com/)

## Features

- fast
  - written in C / C++
  - uses Chrome V8
- rich ecosystem
  - there exist lots of libraries (modules) you can use with Node.js
  - more of that later (see _npm_)
- full support of ES 2015 (ES 6)

## What is ES?

- ECMAScript
  - basis of JavaScript
  - standardized by [ECMA International](https://www.ecma-international.org/)
- ES is constantly adjusted
  - new language features added
  - yearly updates since 2015
- ES version features and browser compatibility
  - refer to http://kangax.github.io/compat-table/es2016plus/
