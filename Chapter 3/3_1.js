const LinkedList = require('../Chapter 2/LinkedList');

class Stack {
  constructor() {
    this.list = [];
    this.length = [0, 0, 0];
  }

  push(val, num) {
    const ind = this.length[num - 1] * 3 + num - 1;
    this.list[ind] = val;
    this.length[num - 1]++;

    console.log(this.list, this.length);
  }

  pop(num) {
    let val = null;
    if (this.length[num-1]) {
      const ind = this.length[num - 1] * 3 + num - 1;
      val = this.list[ind];
      this.list[ind] = undefined;
      this.length[num - 1]--;
    }
    console.log(this.list, this.length, val);
    return val
  }
}

const s = new Stack();
s.push(2, 2);
s.push(2, 1);
s.pop(1)
