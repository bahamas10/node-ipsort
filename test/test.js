var assert = require('assert');

var ipsort = require('../');

function copy(o) {
  return JSON.parse(JSON.stringify(o));
}

var unsorted = [
  '10.0.1.15',
  '10.0.1.4',
  '10.0.1.1',
  '10.0.1.9',
  '10.0.1.13',
  '10.0.1.12',
  '10.0.1.5',
  '10.0.1.6',
  '10.0.1.3',
  '10.0.1.7',
  '10.0.1.14',
  '10.0.1.0',
  '10.0.1.8',
  '10.0.1.2',
  '10.0.1.10',
  '10.0.1.11'
];

var sorted = [
  '10.0.1.0',
  '10.0.1.1',
  '10.0.1.2',
  '10.0.1.3',
  '10.0.1.4',
  '10.0.1.5',
  '10.0.1.6',
  '10.0.1.7',
  '10.0.1.8',
  '10.0.1.9',
  '10.0.1.10',
  '10.0.1.11',
  '10.0.1.12',
  '10.0.1.13',
  '10.0.1.14',
  '10.0.1.15'
];

var u;

console.log('testing sort');
u = copy(unsorted);
assert.deepEqual(ipsort(u), sorted);

console.log('testing inplace sort');
u = copy(unsorted);
ipsort(u);
assert.deepEqual(u, sorted);

console.log('testing sort compare function');
u = copy(unsorted);
u.sort(ipsort.compareFunction);
assert.deepEqual(u, sorted);

console.log('testing non-ip input values');
var arr = [false, true, null, NaN, Infinity, [], {}, 'foo', 'bar', 'baz', new Date()];
arr.forEach(function(value) {
  if (isNaN(value))
    return;
  assert.deepEqual([value], ipsort([value]));
});

console.log('testing non-array input values');
var context = null;
assert.throws(ipsort.bind(context, true));
assert.throws(ipsort.bind(context, false));
assert.throws(ipsort.bind(context, null));
assert.throws(ipsort.bind(context, NaN));
assert.throws(ipsort.bind(context, 0));
assert.throws(ipsort.bind(context, 25));
assert.throws(ipsort.bind(context, Infinity));
assert.throws(ipsort.bind(context, -1));
assert.throws(ipsort.bind(context, '0'));
assert.throws(ipsort.bind(context, 'foo'));
assert.throws(ipsort.bind(context, new Date()));
assert.throws(ipsort.bind(context, (function() {})));
assert.throws(ipsort.bind(context, {}));
