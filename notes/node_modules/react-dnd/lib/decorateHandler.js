"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DragDropContext_1 = require("./DragDropContext");
var disposables_1 = require("./utils/disposables");
var isClassComponent = require('recompose/isClassComponent').default;
var isPlainObject = require('lodash/isPlainObject');
var invariant = require('invariant');
var hoistStatics = require('hoist-non-react-statics');
var shallowEqual = require('shallowequal');
function decorateHandler(_a) {
    var DecoratedComponent = _a.DecoratedComponent, createHandler = _a.createHandler, createMonitor = _a.createMonitor, createConnector = _a.createConnector, registerHandler = _a.registerHandler, containerDisplayName = _a.containerDisplayName, getType = _a.getType, collect = _a.collect, options = _a.options;
    var _b = options.arePropsEqual, arePropsEqual = _b === void 0 ? shallowEqual : _b;
    var Decorated = DecoratedComponent;
    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
    var DragDropContainer = /** @class */ (function (_super) {
        __extends(DragDropContainer, _super);
        function DragDropContainer(props) {
            var _this = _super.call(this, props) || this;
            _this.isCurrentlyMounted = false;
            _this.handleChange = _this.handleChange.bind(_this);
            _this.disposable = new disposables_1.SerialDisposable();
            _this.receiveProps(props);
            _this.dispose();
            return _this;
        }
        DragDropContainer.prototype.getHandlerId = function () {
            return this.handlerId;
        };
        DragDropContainer.prototype.getDecoratedComponentInstance = function () {
            if (!this.handler) {
                return null;
            }
            return this.handler.ref.current;
        };
        DragDropContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
            return (!arePropsEqual(nextProps, this.props) ||
                !shallowEqual(nextState, this.state));
        };
        DragDropContainer.prototype.componentDidMount = function () {
            this.isCurrentlyMounted = true;
            this.disposable = new disposables_1.SerialDisposable();
            this.currentType = undefined;
            this.receiveProps(this.props);
            this.handleChange();
        };
        DragDropContainer.prototype.componentDidUpdate = function (prevProps) {
            if (!arePropsEqual(this.props, prevProps)) {
                this.receiveProps(this.props);
                this.handleChange();
            }
        };
        DragDropContainer.prototype.componentWillUnmount = function () {
            this.dispose();
            this.isCurrentlyMounted = false;
        };
        DragDropContainer.prototype.receiveProps = function (props) {
            if (!this.handler) {
                return;
            }
            this.handler.receiveProps(props);
            this.receiveType(getType(props));
        };
        DragDropContainer.prototype.receiveType = function (type) {
            if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
                return;
            }
            if (type === this.currentType) {
                return;
            }
            this.currentType = type;
            var _a = registerHandler(type, this.handler, this.manager), handlerId = _a.handlerId, unregister = _a.unregister;
            this.handlerId = handlerId;
            this.handlerMonitor.receiveHandlerId(handlerId);
            this.handlerConnector.receiveHandlerId(handlerId);
            var globalMonitor = this.manager.getMonitor();
            var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });
            this.disposable.setDisposable(new disposables_1.CompositeDisposable(new disposables_1.Disposable(unsubscribe), new disposables_1.Disposable(unregister)));
        };
        DragDropContainer.prototype.handleChange = function () {
            if (!this.isCurrentlyMounted) {
                return;
            }
            var nextState = this.getCurrentState();
            if (!shallowEqual(nextState, this.state)) {
                this.setState(nextState);
            }
        };
        DragDropContainer.prototype.dispose = function () {
            this.disposable.dispose();
            if (this.handlerConnector) {
                this.handlerConnector.receiveHandlerId(null);
            }
        };
        DragDropContainer.prototype.getCurrentState = function () {
            if (!this.handlerConnector) {
                return {};
            }
            var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);
            if (process.env.NODE_ENV !== 'production') {
                invariant(isPlainObject(nextState), 'Expected `collect` specified as the second argument to ' +
                    '%s for %s to return a plain object of props to inject. ' +
                    'Instead, received %s.', containerDisplayName, displayName, nextState);
            }
            return nextState;
        };
        DragDropContainer.prototype.render = function () {
            var _this = this;
            return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {
                var dragDropManager = _a.dragDropManager;
                if (dragDropManager === undefined) {
                    return null;
                }
                _this.receiveDragDropManager(dragDropManager);
                // Let componentDidMount fire to initialize the collected state
                if (!_this.isCurrentlyMounted) {
                    return null;
                }
                return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: _this.handler && isClassComponent(Decorated)
                        ? _this.handler.ref
                        : undefined })));
            }));
        };
        DragDropContainer.prototype.receiveDragDropManager = function (dragDropManager) {
            if (this.manager !== undefined) {
                return;
            }
            this.manager = dragDropManager;
            invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +
                'Make sure to wrap the top-level component of your app with DragDropContext. ' +
                'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
            this.handlerMonitor = createMonitor(dragDropManager);
            this.handlerConnector = createConnector(dragDropManager.getBackend());
            this.handler = createHandler(this.handlerMonitor);
        };
        DragDropContainer.DecoratedComponent = DecoratedComponent;
        DragDropContainer.displayName = containerDisplayName + "(" + displayName + ")";
        return DragDropContainer;
    }(React.Component));
    return hoistStatics(DragDropContainer, DecoratedComponent);
}
exports.default = decorateHandler;
