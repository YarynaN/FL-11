let isBigger = (num1, num2) => num1 > num2;

let isSmaller = (num1, num2) => !isBigger(num1, num2);

console.log(isSmaller(5,-1));