var ip2long = require('ipfunctions').ip2long;

module.exports = ipsort;
module.exports.compareFunction = compareFunction;

function ipsort(ips) {
  return ips.sort(compareFunction);
}

function compareFunction(a, b) {
  var al = ip2long(a);
  var bl = ip2long(b);
  if (al === false)
    al = -1;
  if (bl === false)
    bl = -1;

  if (al < bl)
    return -1;
  if (bl < al)
    return 1;
  return 0;
}
