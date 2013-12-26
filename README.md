ipsort
=======

Sort IP Addresses

Example
-------

``` js
> var ipsort = require('./');
> ipsort(['192.168.1.5', '192.168.1.3', '192.168.1.1', '192.168.1.2'])
[ '192.168.1.1',
  '192.168.1.2',
  '192.168.1.3',
  '192.168.1.5' ]
```
Usage
-----

### `ipsort(arr)`

Given an array of IP addresses (as strings), return a sorted array.

**Note:** like `Array.prototype.sort`, the array given is modified in-place.

### `ipsort.compareFunction(a, b)`

The compare funciton used in `Array.prototype.sort`

Installation
------------

    npm install ipsort

License
-------

MIT License
