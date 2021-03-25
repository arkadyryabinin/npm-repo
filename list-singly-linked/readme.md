### Singly Linked List data structure implementation

## Usage

```javascript
const LinkedList = require('list-singly-linked');

const list = new LinkedList(); // creates a new Linked List object

list.push(value) // appends a new tail node with given value

list.unshift(value) // appends a new head node with given value

list.pop() // removes the tail node from list and returns the removed node's value

list.shift() // removes the head from list and returns the removed node's value

list.get(index) // returns the node, defined by index

list.length // the length of the list
```

## Install

```bash
$ npm install list-singly-linked
```

## License

ISC