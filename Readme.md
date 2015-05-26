# to-unix-timestamp [![CI][ci-badge]][ci-link]

Convert a date to a Unix timestamp.

## Installation

```sh
$ component install segmentio/to-unix-timestamp
```

## Example

```js
var unix = require('to-unix-timestamp');

unix(new Date()); //=> 1380249249
```

## API

### toUnixTimestamp(date)

Converts a Date object to a Unix timestamp.

## License

MIT


[ci-badge]: https://circleci.com/gh/segmentio/to-unix-timestamp.svg?style=svg
[ci-link]: https://circleci.com/gh/segmentio/to-unix-timestamp
