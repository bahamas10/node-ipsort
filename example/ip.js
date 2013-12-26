var ipsort = require('../');

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

console.log('unsorted\n%s', unsorted.join('\n'));
var sorted = ipsort(unsorted);
console.log('\nsorted\n%s', sorted.join('\n'));
