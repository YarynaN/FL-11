let formatTime = (num) => {
    const min = num % 60;
    num = Math.trunc(num / 60);
    const hours = num % 24;
    num = Math.trunc(num / 24);
    const days = num;

    return `${days} day(s) ${hours} hour(s) ${min} minute(s)`;
};

console.log(formatTime(59));