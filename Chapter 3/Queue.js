const LinkedList = require('../Chapter 2/LinkedList');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const node = new LinkedList(val);
    if (this.front == null) {
      this.front = node;
      this.back = node;
    } else {
      var p = this.back;
      this.back = node;
      p.next = this.back;
    }
  }

  dequeue() {
    if (this.front == this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
  }
}

const q = new Queue();
q.enqueue(2);
q.enqueue(1);
q.enqueue(0);
q.dequeue();
q.dequeue();
q.dequeue();