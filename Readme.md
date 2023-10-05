# to-unix-timestamp [![CI][ci-badge]][ci-link]

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

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
