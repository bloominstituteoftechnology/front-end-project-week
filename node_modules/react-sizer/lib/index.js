'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultGetDisplayName = exports.defaultHeightProp = exports.defaultWidthProp = exports.defaultGetSize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = sizer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


var defaultGetSize = exports.defaultGetSize = function defaultGetSize(domElement) {
  return { width: domElement.clientWidth, height: domElement.clientHeight };
};
var defaultWidthProp = exports.defaultWidthProp = 'width';
var defaultHeightProp = exports.defaultHeightProp = 'height';
var defaultGetDisplayName = exports.defaultGetDisplayName = function defaultGetDisplayName(name) {
  return 'Sizer(' + name + ')';
};

var placeholderStyle = {
  overflow: 'visible',
  height: 0,
  width: 0
};

var Placeholder = function (_Component) {
  _inherits(Placeholder, _Component);

  function Placeholder() {
    _classCallCheck(this, Placeholder);

    return _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).apply(this, arguments));
  }

  _createClass(Placeholder, [{
    key: 'render',
    value: function render() {
      return (0, _react.createElement)('div', { style: placeholderStyle });
    }
  }]);

  return Placeholder;
}(_react.Component);

function sizer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$getSize = _ref.getSize,
      getSize = _ref$getSize === undefined ? defaultGetSize : _ref$getSize,
      _ref$widthProp = _ref.widthProp,
      widthProp = _ref$widthProp === undefined ? defaultWidthProp : _ref$widthProp,
      _ref$heightProp = _ref.heightProp,
      heightProp = _ref$heightProp === undefined ? defaultHeightProp : _ref$heightProp,
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? defaultGetDisplayName : _ref$getDisplayName,
      _ref$updateSizeCallba = _ref.updateSizeCallback,
      updateSizeCallback = _ref$updateSizeCallba === undefined ? function () {} : _ref$updateSizeCallba,
      _ref$resizeProps = _ref.resizeProps,
      resizeProps = _ref$resizeProps === undefined ? [] : _ref$resizeProps;

  return function _sizer(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var Sizer = function (_Component2) {
      _inherits(Sizer, _Component2);

      function Sizer(props) {
        _classCallCheck(this, Sizer);

        var _this2 = _possibleConstructorReturn(this, (Sizer.__proto__ || Object.getPrototypeOf(Sizer)).call(this, props));

        _this2.state = { width: null, height: null };
        _this2.DOMNode = null;
        _this2.parentDOMNode = null;
        _this2.setWrappedInstance = _this2.setWrappedInstance.bind(_this2);
        _this2.onResize = _this2.onResize.bind(_this2);
        return _this2;
      }

      _createClass(Sizer, [{
        key: 'setWrappedInstance',
        value: function setWrappedInstance(ref) {
          this.wrappedInstance = ref;
          if (ref) {
            this.DOMNode = (0, _reactDom.findDOMNode)(ref);
            this.parentDOMNode = this.DOMNode.parentNode;
          } else {
            this.DOMNode = null;
            this.parentDOMNode = null;
          }
        }
      }, {
        key: 'getWindow',
        value: function getWindow() {
          return this.DOMNode ? this.DOMNode.ownerDocument.defaultView || window : window; // eslint-disable-line no-undef
        }
      }, {
        key: 'onResize',
        value: function onResize() {
          var _this3 = this;

          if (!this.rafId) {
            this.rafId = (0, _raf2.default)(function () {
              _this3.rafId = null;
              _this3.updateSize();
            });
          }
        }
      }, {
        key: 'updateSize',
        value: function updateSize() {
          if (this.parentDOMNode) {
            var _state = this.state,
                oldWidth = _state.width,
                oldHeight = _state.height;

            var _getSize = getSize(this.parentDOMNode),
                width = _getSize.width,
                height = _getSize.height;

            if (width !== oldWidth || height !== oldHeight) {
              this.setState({ width: width, height: height }, updateSizeCallback);
            }
          }
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateSize();
          this.getWindow().addEventListener('resize', this.onResize, false);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.getWindow().removeEventListener('resize', this.onResize);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var prevProps = this.props;
          if (resizeProps.some(function (resizeProp) {
            return prevProps[resizeProp] !== nextProps[resizeProp];
          })) {
            this.onResize();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var props = this.props;
          var _state2 = this.state,
              width = _state2.width,
              height = _state2.height;

          if (width || height) {
            var _extends2;

            return (0, _react.createElement)(WrappedComponent, _extends({}, props, (_extends2 = {}, _defineProperty(_extends2, widthProp, width), _defineProperty(_extends2, heightProp, height), _defineProperty(_extends2, 'ref', this.setWrappedInstance), _extends2)));
          } else {
            return (0, _react.createElement)(Placeholder, { ref: this.setWrappedInstance });
          }
        }
      }]);

      return Sizer;
    }(_react.Component);

    Sizer.displayName = displayName;
    Sizer.WrappedComponent = WrappedComponent;

    return (0, _hoistNonReactStatics2.default)(Sizer, WrappedComponent);
  };
}