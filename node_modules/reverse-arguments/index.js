module.exports = function reverseArgs(fn, scope) {
  return function(/*args*/) {
    var args = Array.prototype.slice.call(arguments);
    return fn.apply(scope || this, args.reverse());
  };
};
