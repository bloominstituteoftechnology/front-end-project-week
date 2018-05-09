"use strict";
// This file is part of nbind, copyright (C) 2014-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.
Object.defineProperty(exports, "__esModule", { value: true });
function removeAccessorPrefix(name) {
    // The C++ side gives the same name to getters and setters.
    var prefixMatcher = /^[Gg]et_?([A-Z]?([A-Z]?))/;
    return (name.replace(prefixMatcher, function (match, initial, second) { return (second ? initial : initial.toLowerCase()); }));
}
exports.removeAccessorPrefix = removeAccessorPrefix;
