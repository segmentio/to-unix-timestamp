describe('to-unix-timestamp', function () {

var assert = require('assert');
var unix = require('to-unix-timestamp');

it('should convert a date', function () {
  var date = new Date(1380249249000);
  assert(1380249249 == unix(date));
});

});