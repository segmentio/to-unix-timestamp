'use strict';

/**
 * Convert a `date` into a Unix timestamp.
 *
 * @param {Date}
 * @return {Number}
 */

function toUnixTimestamp(date) {
  return Math.floor(new Date(date).getTime() / 1000);
}

/**
 * Exports.
 */

module.exports = toUnixTimestamp;
