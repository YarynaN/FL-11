let formatTime = (num) => {
    if (num < 0) {
        return 'Cannot process negative number!'
    }

    const min = num % 60;
    num = Math.trunc(num / 60);
    const hours = num % 24;
    num = Math.trunc(num / 24);
    const days = num;

    return `${days} day(s) ${hours} hour(s) ${min} minute(s)`;
};

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));