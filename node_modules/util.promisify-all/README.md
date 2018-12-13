# util.promisify-all

[![Build Status](https://travis-ci.org/SimenB/util.promisify-all.svg?branch=master)](https://travis-ci.org/SimenB/util.promisify-all)
[![npm](https://img.shields.io/npm/v/util.promisify-all.svg)](https://www.npmjs.com/package/util.promisify-all)

'util.promisify' for objects. Uses [util.promisify](https://www.npmjs.com/package/util.promisify) under the hood.

## Example:

```js
const promisify = require('util.promisify-all');

const fs = promisify(require('fs'));

fs.readFile('/tmp/file.txt').then(console.log).catch(console.error);
```
