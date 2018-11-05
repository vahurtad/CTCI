const LinkedList = require('../Chapter 2/LinkedList');

class Stack {
  constructor() {
    this.top = null;
    this.min = null;
  }

  push(val) {
    const node = new LinkedList(val);

    if (val <= this.min || this.min == null) {
      this.min = val;
    }

    node.next = this.top;
    this.top = node;
  }

  pop() {
    const pop = this.top;

    if (this.top) {
      this.top = this.top.next;
    }
    return this.pop;
  }

  peek() {
    console.log(this.list);
  }

  /**
   * 3.2
   * @return {Stack} elem
   * returns minimum element in O(1)
   */
  stackMin() {
    return this.min;
  }
}

const s = new Stack();
s.push(2);
s.push(3);
s.push(5);
console.log(s.stackMin());
