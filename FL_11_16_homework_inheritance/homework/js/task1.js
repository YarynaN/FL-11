const defaults = { a: 123, b: 777 };
const options = { a: 456 };

let assign = function (target, ...modifier) {
    modifier.forEach((nextToCheck) => {
            for (let key in nextToCheck) {
                if (Object.prototype.hasOwnProperty.call(nextToCheck, key)){
                    target[key] = nextToCheck[key];
                }
            }
        }
    );
    return target;
};

const configs = assign({}, defaults, options);
console.log(configs);