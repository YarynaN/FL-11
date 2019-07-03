const strA = prompt("Please enter x1, y1", "");
const strB = prompt("Please enter x2, y2", "");
const strC = prompt("Please enter x3, y3", "");

const p1 = strA.split(',');
const p2 = strB.split(',');
const p3 = strC.split(',');

const x1 = parseFloat(p1[0]);
const y1 = parseFloat(p1[1]);
const x2 = parseFloat(p2[0]);
const y2 = parseFloat(p2[1]);
const x3 = parseFloat(p3[0]);
const y3 = parseFloat(p3[1]);

const l1 = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
const l2 = Math.sqrt(((x3-x2) * (x3-x2)) + ((y3-y2) * (y3-y2)));

console.log(l1===l2);
