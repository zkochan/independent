<!--@'# ' + pkg.name-->
# independent
<!--/@-->

<!--@'> ' + pkg.description-->
> Change relative requires to import actual modules
<!--/@-->

<!--@shields.flatSquare('npm', 'travis', 'coveralls')-->
[![npm version](https://img.shields.io/npm/v/independent.svg?style=flat-square)](https://www.npmjs.com/package/independent) [![Build Status](https://img.shields.io/travis/zkochan/independent/master.svg?style=flat-square)](https://travis-ci.org/zkochan/independent) [![Coverage Status](https://img.shields.io/coveralls/zkochan/independent/master.svg?style=flat-square)](https://coveralls.io/r/zkochan/independent?branch=master)
<!--/@-->

## Installation

```sh
npm i -S independent
```

## Usage

```js
'use strict'
const independent = require('independent')

independent({
  code: "require('./bar')",
  path: __filename,
})
.then(result => console.log(result))
//> require('bar')

independent({
  code: "import sum from './foo/sum'",
  path: __filename,
})
.then(result => console.log(result))
//> import sum from 'foo/sum'
```

## License

[MIT](./LICENSE) © [Zoltan Kochan](http://kochan.io)

* * *

<!--@dependencies({ shield: 'flat-square' })-->
## <a name="dependencies">Dependencies</a> [![dependency status](https://img.shields.io/david/zkochan/independent/master.svg?style=flat-square)](https://david-dm.org/zkochan/independent/master)

- [babel-runtime](https://github.com/babel/babel/blob/master/packages): babel selfContained runtime
- [@zkochan/async-replace](https://github.com/zkochan/async-replace): String replace using asynchronous replacement functions
- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up): Read the closest package.json file
- [relative](https://github.com/jonschlinkert/relative): Get the relative filepath from path A to path B. Calculates from file-to-directory, file-to-file, directory-to-file, and directory-to-directory.
- [resolve](https://github.com/substack/node-resolve): resolve like require.resolve() on behalf of files asynchronously and synchronously

<!--/@-->

<!--@devDependencies({ shield: 'flat-square' })-->
## <a name="dev-dependencies">Dev Dependencies</a> [![devDependency status](https://img.shields.io/david/dev/zkochan/independent/master.svg?style=flat-square)](https://david-dm.org/zkochan/independent/master#info=devDependencies)

- [babel-cli](https://github.com/babel/babel/blob/master/packages): Babel command line.
- [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports): Fix babel/babel#2212
- [babel-plugin-transform-runtime](https://github.com/babel/babel/blob/master/packages): Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
- [babel-preset-es2015](https://github.com/babel/babel/blob/master/packages): Babel preset for all es2015 plugins.
- [babel-register](https://github.com/babel/babel/blob/master/packages): babel require hook
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog): Commitizen adapter following the conventional-changelog format.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://github.com/feross/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [ghooks](https://github.com/gtramontina/ghooks): Simple git hooks
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/mosjs/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [semantic-release](https://github.com/semantic-release/semantic-release): automated semver compliant package publishing
- [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg): Script to validate a commit message follows the conventional changelog standard

<!--/@-->
