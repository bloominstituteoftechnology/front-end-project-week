'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var request = require('request');

var fetchFont = exports.fetchFont = function fetchFont(src) {
  return new Promise(function (resolve, reject) {
    request({
      url: src,
      method: 'GET',
      encoding: null
    }, function (error, response, body) {
      if (error) {
        return reject(error);
      }

      return resolve(body);
    });
  });
};