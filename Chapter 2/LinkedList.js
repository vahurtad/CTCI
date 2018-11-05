class LinkedList {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }

  /**
   * @return {LLNode}
   */
  print() {
    let head = this;
    while (head) {
      console.log(head.val);
      head = head.next;
    }
  }

  // new head
  prepend(val) {
    let head = this;
    const node = new LinkedList(val);
    if (!head.val) {
      head = node;
    }
    return head;
  }

  /**
   * 2.1
   * @return {LLNode}
   */
  removeDupes() {
    // using two pointers where the second
    // one searches ahead
    const head = this;
    let curr = head;

    if (head === null || head.next === null) return null;

    while (curr.next) {
      if (head.val === curr.next.val) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return head;
  }

  /**
     * 2.2
     * @param {kth}
     * @return {value}
     */
  kthToLast(kth = null) {
    let head = this;
    let count = 0;
    let actual = 1;

    while (head) {
      count += 1;
      head = head.next;
    }
    head = this;
    while (head) {
      if (actual === count - kth) {
        return head.val;
      }
      actual += 1;
      head = head.next;
    }
    return 0;
  }

  /**
     * 2.3
     * @return {LLNode}
     */
  deleteMiddle() {
    const head = this;
    let curr = head;
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    while (curr) {
      if (curr.next.val === slow.val) {
        curr.next = curr.next.next;
        return head;
      }
      curr = curr.next;
    }
    return head;
  }

  /**
   * @return {LLNode}
   */
  deleteTail() {
    const head = this;
    while (head) {
      if (head.next.next == null) {
        head.next = null;
        console.log(head.val, head.next);
        break;
      }
    }
    console.log(head);
    return 0;
  }

  /**
   * @return {LLNode}
   */
  deleteHead() {
    let head = this;
    while (head) {
      if (head.next == null) {
        console.log(head.val);
      }
      head = head.next;
    }
    console.log(head);
    return 0;
  }


  /**
   * 2.4
   * @param {value}
   * @return {LLNode}
   */
  partition(value) {
    let head = this;
    let equal = null;
    let small = null;
    let last = null;
    let equalTail = null;
    let smallTail = null;
    let lastTail = null;

    while (head) {
      if (head.val === value) {
        // if empty  add to head
        if (!equal) {
          equal = head;
          equalTail = head;
        } else {
          // if not empty add to tail node
          equalTail.next = head;
          equalTail = equalTail.next;
        }
      } else if (head.val < value) {
        if (!small) {
          small = head;
          smallTail = head;
        } else {
          smallTail.next = head;
          smallTail = smallTail.next;
        }
      } else {
        if (!last) {
          last = head;
          lastTail = head;
        } else {
          lastTail.next = head;
          lastTail = lastTail.next;
        }
      }
      head = head.next;
    }
    if (lastTail) {
      lastTail.next = null;
    }

    if (!small) {
      if (!equal) {
        return last;
      }
      equalTail.next = lastTail;
      return equal;
    }

    if (!equal) {
      smallTail.next = lastTail;
      return small;
    }
    smallTail.next = equal;
    equalTail.next = last;
    return small;
  }

  /**
   * 2.5
   * @param {LinkedList} val
   * @return {LinkedList}
   */
  sumLists(list, carry = 0) {
    let first = this;
    let second = list;

    let value = carry;
    value += first ? first.val : 0;
    value += second ? second.val : 0;
    let node = new LinkedList(value % 10);
    const n = node;

    while (node && (value % 10 > 0) && first.next) {
      first = first.next;
      second = second.next;
      value = value > 10 ? 1 : 0;
      value += first ? first.val : 0;
      value += second ? second.val : 0;

      node.next = new LinkedList(value % 10);
      node = node.next;
    }
    return n;
  }

  /**
   * 2.8
   * @param {LinkedList} val
   * @return {LinkedList}
   */
  loopDetection() {
    const head = this;
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast.val === slow.val) {
        console.log(slow.val);
        break;
      }
    }
    return slow.val;
  }
}
module.exports = LinkedList;
