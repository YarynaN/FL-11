// task 1

// let maxElement = (...arr) =>  Math.max(...arr);
//
//   const array = [1, 2, 5, 100500, 1, 1, 1, 15, -135];
//
// console.log(maxElement(...array));

// task 2

// let copyArray = (arr) => [...arr];
//
// const copiedArray = copyArray(array);
//
// console.log(array === copiedArray);
// console.log(array, copiedArray);
// console.log(copiedArray);

// task 3

// let addUniqueId = (obj) => {
//     const uniqueId = Symbol('this is identifier');
//     const result = {...obj};
//     result.id = uniqueId;
//     return result;
// };
//
// let testObj = {cat: 'amazing', dog: 'smelly' };
// console.log(addUniqueId(testObj));
// console.log(testObj);
// console.log(testObj === addUniqueId(testObj));

// task 4

// let regroupObject = (obj) => {
//     let res = obj;
//     let {name: name, details: details} = res;
//     const result = {university: details.university, user:{age: details.age, firstName: name, id: details.id}};
//     return result;
// };
//
// let testObj2 = { name: 'Francis', details: {id: 1, age: 35, university: 'UNI'}};
// console.log(regroupObject(testObj2));

// task 5

// let findUniqueElements = (arr) => [...new Set(arr)];
//
// console.log(findUniqueElements(array));


// task 6

// let hideNumber = (phoneNum) => {
//     const shownDigits = phoneNum.slice(-4);
//     const result = shownDigits.padStart(phoneNum.length, '*');
//     return result;
// };
//
// const phoneNumber = '0123456789';
// console.log(hideNumber(phoneNumber));

// task 7
//  let requiredParam = () => {
//     throw new Error('Missing property');
//  };
//
//
// let add = (a = requiredParam(), b = requiredParam()) => a + b;
//
// console.log(add(1));
// console.log(add(1, 3));

// task 8



// task 9