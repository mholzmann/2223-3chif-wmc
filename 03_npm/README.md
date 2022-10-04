# Introduction to `npm`

## What is `npm`?

- Formally called _Node Package Manager_
- Consists of three components:
  - [website](https://www.npmjs.com)
    - description of available packages
  - registry
    - contains all packages
  - client app
    - Command Line Interface (CLI) for managing packages
    - automatically installed with `Node.js`

## What do you do with `npm`?

- Manage your project
  - author, version number, license, ...

- Manage your project dependencies
  - install / uninstall / update packages
- Publish your own project to `npm` registry

## Project dependencies

- Following problems have to be solved in every software, which depends on other libraries:

  - How to define which dependencies the application needs?
  - How to find out if dependencies should be updated?
  - How to reinstall dependencies on a target machine?

- `npm` solves those problems with the file `package.json`

## Create a `package.json`

- Open the project directory in your terminal

- Run the following command:

  ```bash
  $ npm init
  ```

- As a result a file called `package.json` will be created:
  ```json [2|3|4|5|6-8|9|10]
  {
    "name": "npm-demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "John Snow",
    "license": "ISC"
  }
  ```
  
## Install _Chalk_ package

- [Chalk](https://www.npmjs.com/package/chalk) is a package for formatting your console output

- You can install it via `npm`:

  ```bash
  $ npm install chalk
  ```
  
- You can check the installed _Chalk_ version:

  ```bash [1|2-3]
  $ npm list
  > npm-demo@1.0.0 /home/mh/node/npm-demo
  > └── chalk@5.0.1
  ```

  <!---->

- Additionally you will find a new dependency in `package.json`:

  ```json [11-13]
  {
    "name": "npm-demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "John Snow",
    "license": "ISC",
    "dependencies": {
      "chalk": "^5.0.1"
    }
  }
  ```

## Semantic Versioning

- Version number format: MAJOR.MINOR.PATCH

- `5.0.1` means

  - MAJOR=5
  - MINOR=0
  - PATCH=1

  <!---->

- Increment …
  - MAJOR version when you make incompatible API changes
  - MINOR version when you add functionality in a backwards compatible manner
  - PATCH version when you make backwards compatible bug fixes

- You can find more details at [semver.org](semver.org)

## Versions in `package.json`

- `5.0.1` means

  - install exactly version 5.0.1

- `~5.0.1` means
  - install most recent 5.0.x version
  
- `^5.0.1` means
  - install most recent 5.x.x version

## Install a specific _Chalk_ version

- You can uninstall *Chalk* via npm:

  ```bash
  $ npm uninstall chalk
  ```

- You can install a specific version (e.g. V4):

  ```bash
  $ npm install chalk@4
  ```

## Import the installed _Chalk_ package

- Create a file `index.js` with following content:

  ```javascript
  const chalk = require("chalk");
  console.log(chalk.red("Hello world"));
  ```

- Afterwards execute the program:

  ```bash
  $ node index.js
  ```

## Install and excecute _Cowsay_ package

- [Cowsay](https://www.npmjs.com/package/cowsay) is a package for showing a configurable talking cow

- `npm install cowsay`

  - installs the package to `node_modules/cowsay`
  - Installs the executables to `node_modules/.bin`
  
- You can execute it with following command:

  ```bash
  $ ./node_modules/.bin/cowsay "Hello world!"
  ```

- But easier way for executing a package is by using `npx`:

  ```bash
  $ npx cowsay "Hello world!"
  ```

## What is in `node_modules`?

- All packages are installed in a folder called  `node_modules`
  - ... and their dependencies
  - ... and the dependencies of the dependencies ...
  
- You can take a look at all installed packages:
  ```bash
  $ npm list --all
  ```
  
- `NODE_MODULES` can contain a lot of files

  - don't copy it from machine to machine
  - never (!!!) add it to a Git repository

## Git ignore `node_modules`

- Create a file called `.gitignore` in your Git Repository

  - the file must be named exactly like that
  - so don't called it e.g. `.gitignore.txt`

- Add the following line to `.gitignore`:

  ```
  node_modules/
  ```

  

## `package-lock.json`

- `npm install` also creates the file `package-lock.json`

- The latest matches of the dependencies as given in `package.json` are ...

  - ... downloaded into `node_modules`
  - ... written into `package-lock.json`

  <!---->

- Add `package-lock.json` to your Git repository

- After that your team mates can pull the repo and call `npm install`

  - all of them will get the same package versions as you
  - even if a newer version would already be available

## `npm update`

- If you want to upgrade to newer package versions run:

  ```bash
  $ npm update
  ```

- This will update `node_modules` and `package-lock.json`

  - with respect to the restriction in `package.json`

  
