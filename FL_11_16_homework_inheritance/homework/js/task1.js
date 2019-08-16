const defaults = { a: 123, b: 777 };
const options = { a: 456 };


let assign = function (target, modifier) {
    for(let i in target){
        if(Object.prototype.hasOwnProperty.call(modifier, i)){
            target[i] = modifier[i];
        }
    }
    return target;
};

const configs = assign(defaults, options);
console.log(configs);