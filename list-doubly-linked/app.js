class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

module.exports = class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    const oldTail = this.tail;
    switch (true) {
      case (this.length === 0): this.head = newNode; this.tail = newNode; break;
      default: newNode.prev = oldTail; oldTail.next = newNode; this.tail = newNode; break;
    }
    this.length += 1;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    const oldHead = this.head;
    switch (true) {
      case (this.length === 0): this.head = newNode; this.tail = newNode; break;
      default: newNode.next = oldHead; oldHead.prev = newNode; this.head = newNode; break;
    }
    this.length += 1;
    return this;
  }

  shift() {
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

  pop() {
    let oldTail;
    switch (true) {
      case (this.length === 0): return undefined;
      case (this.length === 1):
        oldTail = this.tail; this.head = null; this.tail = null; break;
      default:
        oldTail = this.tail; this.tail = oldTail.prev; this.tail.next = null; break;
    }
    this.length -= 1;
    return oldTail.value;
  }

  find(cb, h2t = true) { // cb is function(elem), h2t - search from head to tail
    let current = h2t ? this.head : this.tail;
    for (let i = 0; i < this.length; i += 1) {
      console.log(i)
      if (cb(current.value)) return current;
      else current = h2t ? current.next : current.prev;
    }
    return undefined;
  }

  findIndex(cb) { // cb is function(elem), h2t - search from head to tail
    let current = h2t ? this.head : this.tail;
    for (let i = 0; i < this.length; i += 1) {
      if (cb(current.value)) return i;
      else current = h2t ? current.next : current.prev;
    }
    return -1;
  }
};
