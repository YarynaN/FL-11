let getMin = (...args) => {
    if (args.length === 0) {
        return NaN;
    }

    let min = Infinity;
    for (let i = 0; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    
    return min;
};

console.log(getMin(3, 0, -3));