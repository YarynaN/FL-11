let reverseNumber = (num) => {
    let reverse = 0;
    while (num !== 0) {
        const remainder = num % 10;
        reverse *= 10;
        reverse += remainder;
        num = Math.trunc(num / 10);
    }
    return reverse;
};

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));