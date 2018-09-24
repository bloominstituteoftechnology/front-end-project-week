"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerTarget(type, target, manager) {
    var registry = manager.getRegistry();
    var targetId = registry.addTarget(type, target);
    function unregisterTarget() {
        registry.removeTarget(targetId);
    }
    return {
        handlerId: targetId,
        unregister: unregisterTarget,
    };
}
exports.default = registerTarget;
