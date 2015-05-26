'use strict';

/**
 * Module dependencies.
 */

var assert = require('assert');
var unix = require('../');

/**
 * Tests.
 */

describe('to-unix-timestamp', function() {
  it('should convert a date to a Unix timestamp', function() {
    var date = new Date(1380249249000);
    assert(unix(date) === 1380249249);
  });
});
