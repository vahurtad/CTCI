const LinkedList = require('../Chapter 2/LinkedList');
// choose between oldest cat or dog

class ShelterQueue {
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
      const p = this.back;
      this.back = node;
      p.next = this.back;
    }
  }

  dequeueAny() {
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
  }

  dequeueDog() {
    let head = this.front;
    const curr = head;
    while (head !== null) {
      if (head.val === 'dog') {
        curr.next = head.next;
        break;
      }
      head = head.next;
    }
  }

  dequeueCat() {
    let head = this.front;
    const curr = head;
    while (head !== null) {
      if (head.val === 'cat') {
        curr.next = head.next;
        break;
      }
      head = head.next;
    }
  }
}

const q = new ShelterQueue();
q.enqueue('cat');
q.enqueue('dog');
q.enqueue('dog');
q.enqueue('cat');
q.dequeueDog();
console.log(q)
