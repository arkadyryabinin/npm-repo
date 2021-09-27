const LinkedList = require('../list-singly-linked/app');

const list = new LinkedList();
list.push({ hello: 'world' });
list.push([1, 2, 3]);
list.push('hell world');
list.push(25);
console.log(list.findIndex((item) => item === 'hell world!'));