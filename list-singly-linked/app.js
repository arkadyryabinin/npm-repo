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

  push(value) {
    const newNode = new Node(value);
    switch (true) {
      case (this.length === 0): this.head = newNode; this.tail = newNode; break;
      default: this.tail.next = newNode; this.tail = newNode; break;
    }
    this.length += 1;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    const oldTail = this.head;
    switch (true) {
      case (this.length === 0): this.head = newNode; this.tail = newNode; break;
      default: this.head = newNode; this.head.next = oldTail; break;
    }
    this.length += 1;
    return this;
  }

  shift() {
    let oldTail;
    switch (true) {
      case (this.length === 0): return undefined;
      case (this.length === 1):
        oldTail = this.head; this.head = null; this.tail = null; break;
      default: oldTail = this.head; this.head = oldTail.next; break;
    }
    this.length -= 1;
    return oldTail.value;
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
        oldTail = this.tail; this.tail = this.get(this.length - 2); this.tail.next = null; break;
    }
    this.length -= 1;
    return oldTail.value;
  }
};
