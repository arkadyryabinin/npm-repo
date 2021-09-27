const LinkedList = require('../list-doubly-linked/app');

const list = new LinkedList();
list.push({ hello: 'world' });
// console.log(list);
list.unshift([1, 2, 3]);
// console.log(list);
list.push('hell world');
list.push(25);

console.log(list.find((item) => item === 25, true));