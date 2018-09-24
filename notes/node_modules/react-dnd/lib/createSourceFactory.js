"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var invariant = require('invariant');
var isPlainObject = require('lodash/isPlainObject');
var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];
function createSourceFactory(spec) {
    Object.keys(spec).forEach(function (key) {
        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' +
            'some of the following keys: %s. ' +
            'Instead received a specification with an unexpected "%s" key. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    REQUIRED_SPEC_METHODS.forEach(function (key) {
        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +
            'Instead received a specification with %s: %s. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
    });
    var SourceImpl = /** @class */ (function () {
        function SourceImpl(monitor) {
            this.monitor = monitor;
            this.props = null;
            this.ref = react_1.createRef();
            this.beginDrag = this.beginDrag.bind(this);
        }
        SourceImpl.prototype.receiveProps = function (props) {
            this.props = props;
        };
        SourceImpl.prototype.canDrag = function () {
            if (!this.props) {
                return false;
            }
            if (!spec.canDrag) {
                return true;
            }
            return spec.canDrag(this.props, this.monitor);
        };
        SourceImpl.prototype.isDragging = function (globalMonitor, sourceId) {
            if (!this.props) {
                return false;
            }
            if (!spec.isDragging) {
                return sourceId === globalMonitor.getSourceId();
            }
            return spec.isDragging(this.props, this.monitor);
        };
        SourceImpl.prototype.beginDrag = function () {
            if (!this.props) {
                return;
            }
            var item = spec.beginDrag(this.props, this.monitor, this.ref.current);
            if (process.env.NODE_ENV !== 'production') {
                invariant(isPlainObject(item), 'beginDrag() must return a plain object that represents the dragged item. ' +
                    'Instead received %s. ' +
                    'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
            }
            return item;
        };
        SourceImpl.prototype.endDrag = function () {
            if (!this.props) {
                return;
            }
            if (!spec.endDrag) {
                return;
            }
            spec.endDrag(this.props, this.monitor, this.ref.current);
        };
        return SourceImpl;
    }());
    return function createSource(monitor) {
        return new SourceImpl(monitor);
    };
}
exports.default = createSourceFactory;
