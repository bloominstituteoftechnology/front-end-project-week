'use strict';

const fs = require('fs');
const parser = require('./src/firebase-json.js');

/**
 * Parse JSON-like encoded string.
 *
 * @param  {string} json Content to decode
 * @return {any}
 */
exports.parse = function(json) {
  return parser.parse(json.toString());
};

/**
 * Load and decode a JSON-like file.
 *
 * @param  {string}        filePath  File to load
 * @param  {string|object} [options] fs.readFile options
 * @return {Promise<any,Error>}
 */
exports.load = function(filePath, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, data) => {
      if (err == null) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  }).then(exports.parse);
};

/**
 * Load and decode synchronously a JSON-like file.
 *
 * @param  {string}        filePath  File to load
 * @param  {string|object} [options] fs.readFile options
 * @return {any}
 */
exports.loadSync = function(filePath, options) {
  const json = fs.readFileSync(filePath, options);

  return exports.parse(json);
};
