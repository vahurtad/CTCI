class PriorityQueue {
  constructor() {
    this.node = [];
  }

  sort() {
    this.node.sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  enqueue(val, priority) {
    const n = { val, priority };
    this.node.push(n);
    this.sort();
  }

  dequeue() {
    return this.node.shift().key;
  }
}
module.exports = PriorityQueue;

// const q = new PriorityQueue();
// q.enqueue(2);
// console.log(q);
