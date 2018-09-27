'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
    _inherits(Modal, _Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        var effect = props.effect || 'fadeInDown';
        _this.setSize(effect);
        _this.state = {
            visible: props.visible,
            style: _style2.default[effect]
        };
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var visible = _ref.visible,
                _ref$effect = _ref.effect,
                effect = _ref$effect === undefined ? 'fadeInDown' : _ref$effect;

            this.setState({
                visible: visible
            });
            this.setSize(effect);
            this.setStyles(effect);
        }
    }, {
        key: 'setStyles',
        value: function setStyles(effect) {
            if (this.props && this.props.styles) {
                _style2.default[effect].panel = _extends({}, _style2.default[effect].panel, this.props.styles);
            }
        }
    }, {
        key: 'setSize',
        value: function setSize(effect) {
            if (this.props && this.props.width) {
                if (this.props.width.charAt(this.props.width.length - 1) === '%') {
                    // Use Percentage
                    var width = this.props.width.slice(0, -1);
                    _style2.default[effect].panel.width = width + '%';
                } else if (this.props.width.charAt(this.props.width.length - 1) === 'x') {
                    // Use Pixels
                    var _width = this.props.width.slice(0, -2);
                    _style2.default[effect].panel.width = _width + 'px';
                } else {
                    // Defaults
                    _style2.default[effect].panel.width = this.props.width + 'px';
                }
            }
            if (this.props && this.props.height) {
                if (this.props.height.charAt(this.props.height.length - 1) === '%') {
                    // Use Percentage
                    var height = this.props.height.slice(0, -1);
                    _style2.default[effect].panel.height = height + 'vh';
                } else if (this.props.height.charAt(this.props.height.length - 1) === 'x') {
                    // Use Pixels
                    var _height = this.props.height.slice(0, -2);
                    _style2.default[effect].panel.height = _height + 'px';
                } else {
                    // Defaults
                    _style2.default[effect].panel.height = this.props.height + 'px';
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: this.state.visible ? this.state.style.container : this.state.style.containerHidden },
                    _react2.default.createElement(
                        'div',
                        { style: this.state.visible ? _extends({}, this.state.style.panel) : this.state.style.panelHidden },
                        this.props.children
                    ),
                    _react2.default.createElement('div', { style: this.state.visible ? this.state.style.mask : this.state.style.maskHidden, onClick: this.props.onClickAway ? this.props.onClickAway : null })
                )
            );
        }
    }]);

    return Modal;
}(_react.Component);

exports.default = Modal;