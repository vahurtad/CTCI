const LinkedList = require('../Chapter 2/LinkedList');

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new LinkedList(val);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let pop = this.top;

    if (this.top) {
      this.top = this.top.next;
    }
    return this.pop;
  }

  peek() {
    console.log(this.list);
  }
}
module.exports = Stack;


// const s = new Stack();
// s.push(2);
// s.push(3);
// s.pop();
// console.log(s)