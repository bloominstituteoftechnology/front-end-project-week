reverse-arguments
================

[![Build Status](https://travis-ci.org/stoeffel/reverse-arguments.svg)](https://travis-ci.org/stoeffel/reverse-arguments) [![npm version](https://badge.fury.io/js/reverse-arguments.svg)](http://badge.fury.io/js/reverse-arguments)
> Reverse the arguments passed to the function.

Installation
------------

`npm install reverse-arguments`

Usage
-----

### Basic usage

```js
var reverse = require('reverse-arguments');

function join() {
  return Array.prototype.slice.call(arguments).join(',');
}

join(1, 2, 3); // => '1,2,3'
reverse(join)(1, 2, 3); // => '3,2,1'
```
