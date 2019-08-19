const defaults = { a: 123, b: 777 };
const options = { a: 456 };

let assign = function (target, ...modifiers) {
    modifiers.forEach((modifier) => {
            for (let key in modifier) {
                if (Object.prototype.hasOwnProperty.call(modifier, key)){
                    target[key] = modifier[key];
                }
            }
        }
    );
    return target;
};

const configs = assign({}, defaults, options);
console.log(configs);