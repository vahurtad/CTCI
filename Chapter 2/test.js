const a = new LinkedList(3, null);
const b = new LinkedList(2, a);
const c = new LinkedList(5, b);
const d = new LinkedList(2, c);
const e = new LinkedList(3, d);
const f = new LinkedList(4, e);
const g = new LinkedList(1, f);
// const gg = g.partition(3);
g.deleteMiddle();
// g.partition(3)

let aa = new LinkedList(7);
aa.prepend(3);
let bb = new LinkedList(1);
let cc = new LinkedList(6);
let dd = new LinkedList(5);
let ee = new LinkedList(9);
const ff = new LinkedList(2);

aa.next = bb;
bb.next = cc;
dd.next = ee;
ee.next = ff;

// aa.sumLists(dd).print();
// aa.sumLists(dd, ee, ff);

aa = new LinkedList(1);
bb = new LinkedList(2);
cc = new LinkedList(3);
dd = new LinkedList(4);
ee = new LinkedList(5);


aa.next = bb;
bb.next = cc;
cc.next = dd;
dd.next = ee;
ee.next = cc;

aa.loopDetection();
