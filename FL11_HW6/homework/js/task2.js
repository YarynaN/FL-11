const strA = prompt("Please enter a", "");
const strB = prompt("Please enter b", "");
const strC = prompt("Please enter c", "");

const a = parseFloat(strA);
const b = parseFloat(strB);
const c = parseFloat(strC);

if (isNaN(a) || isNaN(b) || isNaN(c) ) {
    console.log("Invalid number.");
}
else if (a > (b+c) || b > (a+c) || c > (a+b)) {
    console.log("This triangle doesn't exist");
}
else if(a === b && a === c && b === c){
    console.log('Equivalent triangle');
}
else if(a === b || b === c || a === c){
    console.log('Isosceles triangle');
}
else if (a !== b && a !== c && b !== c){
    console.log('Normal triangle ');
}