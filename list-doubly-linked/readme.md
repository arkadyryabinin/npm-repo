### Doubly Linked List data structure implementation

## Usage

```javascript
const LinkedList = require('list-doubly-linked');

const list = new LinkedList(); // creates a new Linked List object

list.push(value) // appends a new tail node with given value

list.unshift(value) // appends a new head node with given value

list.pop() // removes the tail node from list and returns the removed node's value

list.shift() // removes the head from list and returns the removed node's value

list.get(index) // returns the node, defined by index

list.findIndex(callback, h2t) // returns the index of the first element in the list, that satisfies the provided testing callback function.
// Otherwise, it returns -1, indicating that no element passed the test
// h2t - search from head to tail (by default)

list.find(callback, h2t) // returns the value of the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
// h2t - search from head to tail (by default)

list.length // the length of the list
```

## Install

```bash
$ npm install list-doubly-linked
```

## License

ISC