//0. Write function, which returns array of numbers from string parameter.
/* 
let getNumbers = (str) => {
    let nums = [];
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i])){
            nums.push(parseInt(str[i]));
        }
    }
    return nums;
};
console.log(getNumbers('n1um3ber95'));
*/

//1. Write a function that could receive different amount of parameters
/*
let findTypes = (...args) => {
    let objKeys = {};
    for(let i = 0; i < args.length; i++) {
        const previousValue = objKeys[typeof(args[i])] === undefined ? 0 : objKeys[typeof(args[i])];
        objKeys[typeof(args[i])] = previousValue + 1;
    }
    return objKeys;
};

console.log(findTypes(1, null, 15, 'cat', true));
*/

//2. Write function, which iterates over array and executes function on each element.
/*
let executeForEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};
executeForEach([1, 2, 3], (el) => console.log(el));

 */

//3. Write function, which returns transformed array based on function, reuse 2
/*
let mapArray = (arr, func) => {
    let resultArray = [];
    executeForEach(arr, el => {
        resultArray.push(func(el));
    });
    return resultArray;
};
console.log(mapArray([2, 5, 8], (el) => {return el + 3}));

 */


//4. Write function, which returns filtered array based on function, reuse 2
/*
 let filterArray = (arr, func) => {
     let resultArray2 = [];
     executeForEach(arr, el => {
         if(func(el)){
             resultArray2.push(el);
         }
     });
     return resultArray2;
 };
 console.log(filterArray([2,5,8], (el) => {return el > 3}));

 */

//5. Write function, which returns formatted date.
/*
let showFormattedDate = (date) => {
    let monNames = [
        "Jan", "Feb", "March",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];

    let day = date.getDate();
    let monIndex = date.getMonth();
    let year = date.getFullYear();
    return `Date: ${monNames[monIndex]} ${day} ${year}`;
};
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

 */
//6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.
/*
let canConvertToDate = (date) => {
    let convertDate = new Date(date);
    let day = convertDate.getDate();
    let monIndex = convertDate.getMonth();
    let year = date.getFullYear();

    return day <= 31 && monIndex <= 12 && year <= 2019;
};
console.log(canConvertToDate('2016-13-18T00:00:00'));

 */


//7. Write function, which returns difference between two dates in days
/*
let daysBetween = (date1, date2) => {
    let difference = date2 - date1;
    const millisecndsPerDay = 1000 * 60 * 60 * 24;
    return Math.round(difference/millisecndsPerDay);
};
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

 */

//8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7

//9. Write function, which returns array of keys of an object.

//10. Write function, which returns array of values of an object.