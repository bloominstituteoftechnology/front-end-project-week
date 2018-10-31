var reverse = require('./index.js'),
  expect = require('expect.js'),
  obj = {};

function join() {
  return Array.prototype.slice.call(arguments).join(',');
}


function foo(string, upper) {
  if (upper) {
    return string.toUpperCase();
  } else {
    return string.toLowerCase();
  }
}

obj.test = true;
obj.isEqual = function(arg, bool) {
  return bool === this.test;
};

it('should reverse the arguments', function() {
  expect(reverse(join)()).to.equal('');
  expect(reverse(join)(1)).to.equal('1');
  expect(reverse(join)(1, 2)).to.equal('2,1');
  expect(reverse(join)(1, 2, 3)).to.equal('3,2,1');
  expect(reverse(foo)(true, 'Foo')).to.equal('FOO');
  expect(reverse(foo)(false, 'Foo')).to.equal('foo');
  expect(reverse(reverse(foo))('Foo', false)).to.equal('foo');
  expect(reverse(reverse(foo))('Foo', true)).to.equal('FOO');
});

it('should call the function with the given scope', function() {
  expect(reverse(obj.isEqual, obj)()).to.not.be.ok();
  expect(reverse(obj.isEqual, obj)(true, undefined)).to.be.ok();
  expect(reverse(obj.isEqual, obj)(false, undefined)).to.not.be.ok();
  expect(reverse(obj.isEqual, obj)(undefined, true)).to.not.be.ok();
  expect(reverse(reverse(obj.isEqual, obj))(undefined, true)).to.be.ok();
});
