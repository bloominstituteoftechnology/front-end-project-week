"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invariant = require('invariant');
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var SourceMonitor = /** @class */ (function () {
    function SourceMonitor(manager) {
        this.internalMonitor = manager.getMonitor();
    }
    SourceMonitor.prototype.receiveHandlerId = function (sourceId) {
        this.sourceId = sourceId;
    };
    SourceMonitor.prototype.canDrag = function () {
        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        }
        finally {
            isCallingCanDrag = false;
        }
    };
    SourceMonitor.prototype.isDragging = function () {
        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' +
            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        }
        finally {
            isCallingIsDragging = false;
        }
    };
    SourceMonitor.prototype.subscribeToStateChange = function (listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    };
    SourceMonitor.prototype.isDraggingSource = function (sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    };
    SourceMonitor.prototype.isOverTarget = function (targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    };
    SourceMonitor.prototype.getTargetIds = function () {
        return this.internalMonitor.getTargetIds();
    };
    SourceMonitor.prototype.isSourcePublic = function () {
        return this.internalMonitor.isSourcePublic();
    };
    SourceMonitor.prototype.getSourceId = function () {
        return this.internalMonitor.getSourceId();
    };
    SourceMonitor.prototype.subscribeToOffsetChange = function (listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    };
    SourceMonitor.prototype.canDragSource = function (sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    };
    SourceMonitor.prototype.canDropOnTarget = function (targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    };
    SourceMonitor.prototype.getItemType = function () {
        return this.internalMonitor.getItemType();
    };
    SourceMonitor.prototype.getItem = function () {
        return this.internalMonitor.getItem();
    };
    SourceMonitor.prototype.getDropResult = function () {
        return this.internalMonitor.getDropResult();
    };
    SourceMonitor.prototype.didDrop = function () {
        return this.internalMonitor.didDrop();
    };
    SourceMonitor.prototype.getInitialClientOffset = function () {
        return this.internalMonitor.getInitialClientOffset();
    };
    SourceMonitor.prototype.getInitialSourceClientOffset = function () {
        return this.internalMonitor.getInitialSourceClientOffset();
    };
    SourceMonitor.prototype.getSourceClientOffset = function () {
        return this.internalMonitor.getSourceClientOffset();
    };
    SourceMonitor.prototype.getClientOffset = function () {
        return this.internalMonitor.getClientOffset();
    };
    SourceMonitor.prototype.getDifferenceFromInitialOffset = function () {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    };
    return SourceMonitor;
}());
function createSourceMonitor(manager) {
    return new SourceMonitor(manager);
}
exports.default = createSourceMonitor;
