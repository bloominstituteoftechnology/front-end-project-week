'use strict';

const promisify = require('util.promisify');
const entries = require('object.entries');

module.exports = obj => {
  if (typeof obj === 'function') {
    return promisify(obj);
  }

  return entries(obj)
    .map(entry => {
      if (typeof entry[1] === 'function') {
        return { [entry[0]]: promisify(entry[1]) };
      }

      return { [entry[0]]: entry[1] };
    })
    .reduce((acc, curr) => Object.assign(acc, curr), {});
};
