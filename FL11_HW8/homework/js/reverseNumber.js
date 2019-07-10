let reverseNumber = (num) => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(reverseNumber(-72721));