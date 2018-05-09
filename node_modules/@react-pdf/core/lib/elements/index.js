'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = undefined;

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _pdfkit = require('pdfkit');

var _pdfkit2 = _interopRequireDefault(_pdfkit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElement(type, props, root) {
  var instance = void 0;

  switch (type) {
    case 'ROOT':
      instance = new _pdfkit2.default({ autoFirstPage: false });
      break;
    case 'DOCUMENT':
      instance = new _Document2.default(root, props);
      break;
    case 'PAGE':
      instance = new _Page2.default(root, props);
      break;
    case 'TEXT':
      instance = new _Text2.default(root, props);
      break;
    case 'LINK':
      instance = new _Link2.default(root, props);
      break;
    case 'IMAGE':
      instance = new _Image2.default(root, props);
      break;
    case 'VIEW':
      instance = new _View2.default(root, props);
      break;
    default:
      instance = undefined;
  }

  return instance;
}

exports.createElement = createElement;