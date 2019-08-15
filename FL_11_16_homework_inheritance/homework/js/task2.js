const obj1 = { prop: 5 };
const obj2 = create(obj1);

Object.getPrototypeOf(obj2) === obj1;
obj2.prop;