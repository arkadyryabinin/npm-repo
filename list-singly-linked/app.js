class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) { // append node to tail
    const newNode = new Node(value);
    const oldTail = this.tail;
    switch (true) {
      case (this.length === 0): this.head = newNode; this.tail = newNode; break;
      default: oldTail.next = newNode; this.tail = newNode; break;
    }
    this.length += 1;
    return this;
  }

  unshift(value) { // append node to head
    const newNode = new Node(value);
    const oldHead = this.head;
    switch (true) {
      case (this.length === 0): this.head = newNode; this.tail = newNode; break;
      default: newNode.next = oldHead; this.head = newNode; break;
    }
    this.length += 1;
    return this;
  }

  shift() { // remove head and return the removed head's value
    let oldHead;
    switch (true) {
      case (this.length === 0): return undefined;
      case (this.length === 1):
        oldHead = this.head; this.head = null; this.tail = null; break;
      default: oldHead = this.head; this.head = oldHead.next; break;
    }
    this.length -= 1;
    return oldHead.value;
  }

  get(index = -1) {
    if (Number.isInteger(index) === false) return undefined;
    if (this.length === 0) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    let current = this.head;
    for (let j = 0; j < index; j += 1) {
      current = current.next;
    }
    return current;
  }

  pop() { // remove tail and return the removed tail's value
    let oldTail;
    switch (true) {
      case (this.length === 0): return undefined;
      case (this.length === 1):
        oldTail = this.tail; this.head = null; this.tail = null; break;
      default:
        oldTail = this.tail; this.tail = this.get(this.length - 2); this.tail.next = null; break;
    }
    this.length -= 1;
    return oldTail.value;
  }

  find(cb) { // cb is function(elem)
    let current = this.head;
    for (let i = 0; i < this.length; i += 1) {
      if (cb(current.value)) return current;
      else current = current.next;
    }
    return undefined;
  }

  findIndex(cb) { // cb is function(elem)
    let current = this.head;
    for (let i = 0; i < this.length; i += 1) {
      if (cb(current.value)) return i;
      else current = current.next;
    }
    return -1;
  }
};
