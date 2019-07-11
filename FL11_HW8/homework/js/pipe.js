function addOne(x) {
    return x + 1;
}

let pipe = (num, ...callbacks) => {
    let pipeRes = callbacks[0](num);
    for (let i = 1; i < callbacks.length; i++) {
        pipeRes = callbacks[i](pipeRes);
    }
    return pipeRes;
};

console.log(pipe(1, addOne, addOne));
