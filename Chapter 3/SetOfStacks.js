const Stack = require('../Chapter 3/Stack');

class SetOfStacks {
  constructor(max) {
    this.max = max;
    this.set = [];
  }
  isEmpty() {
    return this.set.length === 0 ? true : false;
  }

  push(val) {
    if (this.isEmpty() || this.set[this.set.length - 1].length === this.max) {
      const newStack = new Stack();
      newStack.push(val);
      this.set.push([newStack]);
    } else {
      this.set[this.set.length - 1].push(val);
    }
  }

  pop() {
    return (this.set.length === 0) ? undefined : this.set.pop();
  }

  popAt(index) {
    return this.set[index].pop();
  }

  peek() {

  }
}

const ss = new SetOfStacks(2);
ss.pop();
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(5);
ss.push(0);
ss.pop();
ss.popAt(1);
