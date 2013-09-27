
/**
 * Expose `toUnixTimestamp`.
 */

module.exports = toUnixTimestamp;


/**
 * Convert a `date` into a Unix timestamp.
 *
 * @param {Date}
 * @return {Number}
 */

function toUnixTimestamp (date) {
  return Math.floor(date.getTime() / 1000);
}