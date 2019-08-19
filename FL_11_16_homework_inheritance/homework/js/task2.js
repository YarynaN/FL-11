const obj1 = { prop: 5 };
const obj2 = create(obj1);

function create(proto) {
    function Result() {
        return this;
    }
    Result.prototype = proto;
    return new Result();
}

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);