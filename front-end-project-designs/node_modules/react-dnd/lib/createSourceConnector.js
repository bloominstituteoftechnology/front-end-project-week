"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wrapConnectorHooks_1 = require("./wrapConnectorHooks");
var shallowEqual = require('shallowequal');
function createSourceConnector(backend) {
    var currentHandlerId;
    var currentDragSourceNode;
    var currentDragSourceOptions;
    var disconnectCurrentDragSource;
    var currentDragPreviewNode;
    var currentDragPreviewOptions;
    var disconnectCurrentDragPreview;
    function reconnectDragSource() {
        if (disconnectCurrentDragSource) {
            disconnectCurrentDragSource();
            disconnectCurrentDragSource = undefined;
        }
        if (currentHandlerId && currentDragSourceNode) {
            disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
        }
    }
    function reconnectDragPreview() {
        if (disconnectCurrentDragPreview) {
            disconnectCurrentDragPreview();
            disconnectCurrentDragPreview = undefined;
        }
        if (currentHandlerId && currentDragPreviewNode) {
            disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
        }
    }
    function receiveHandlerId(handlerId) {
        if (handlerId === currentHandlerId) {
            return;
        }
        currentHandlerId = handlerId;
        reconnectDragSource();
        reconnectDragPreview();
    }
    var hooks = wrapConnectorHooks_1.default({
        dragSource: function connectDragSource(node, options) {
            if (node === currentDragSourceNode &&
                shallowEqual(options, currentDragSourceOptions)) {
                return;
            }
            currentDragSourceNode = node;
            currentDragSourceOptions = options;
            reconnectDragSource();
        },
        dragPreview: function connectDragPreview(node, options) {
            if (node === currentDragPreviewNode &&
                shallowEqual(options, currentDragPreviewOptions)) {
                return;
            }
            currentDragPreviewNode = node;
            currentDragPreviewOptions = options;
            reconnectDragPreview();
        },
    });
    return {
        receiveHandlerId: receiveHandlerId,
        hooks: hooks,
    };
}
exports.default = createSourceConnector;
