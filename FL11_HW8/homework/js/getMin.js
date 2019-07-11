function getMin() {
    if (arguments.length === 0) {
        return NaN;
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }

    return min;
}

console.log(getMin(1, 3, 5, -6));