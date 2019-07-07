const strA = prompt('Please enter x, y of point A', '');
const strB = prompt('Please enter x, y of point B', '');
const strC = prompt('Please enter x, y of point C', '');

const pA = strA.split(',');
const pB = strB.split(',');
const pC = strC.split(',');

const xA = parseFloat(pA[0]);
const yA = parseFloat(pA[1]);
const xB = parseFloat(pB[0]);
const yB = parseFloat(pB[1]);
const xC = parseFloat(pC[0]);
const yC = parseFloat(pC[1]);

const numPoints = 2;
const xCen = (xB+xA)/numPoints;
const yCen = (yB+yA)/numPoints;

console.log(xC===xCen && yC===yCen);
