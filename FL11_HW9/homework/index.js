//Task 0
let getNumbers = (str) => {
    let nums = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            nums.push(parseInt(str[i]));
        }
    }
    return nums;
};

console.log(getNumbers('n1um3ber95'));

//Task 1
let findTypes = (...args) => {
    let objKeys = {};
    for (let i = 0; i < args.length; i++) {
        const previousValue = objKeys[typeof (args[i])] === undefined ? 0 : objKeys[typeof (args[i])];
        objKeys[typeof (args[i])] = previousValue + 1;
    }
    return objKeys;
};

console.log(findTypes(1, null, 15, 'cat', true));

//Task 2
let executeForEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};

executeForEach([1, 2, 3], (el) => console.log(el));

//Task 3
let mapArray = (arr, func) => {
    let resultArray = [];
    executeForEach(arr, el => {
        resultArray.push(func(el));
    });
    return resultArray;
};

console.log(mapArray([2, 5, 8], (el) => {
    return el + 3
}));

//Task 4
let filterArray = (arr, func) => {
    let resultArray2 = [];
    executeForEach(arr, el => {
        if (func(el)) {
            resultArray2.push(el);
        }
    });
    return resultArray2;
};

console.log(filterArray([2, 5, 8], (el) => {
    return el > 3
}));

//Task 5
let showFormattedDate = (date) => {
    let monNames = [
        "Jan", "Feb", "March",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];
    let monIndex = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    return `Date: ${monNames[monIndex]} ${day} ${year}`;
};

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//Task 6
let canConvertToDate = (date) => {
    let convertDate = new Date(date);
    let day = convertDate.getDate();
    let month = convertDate.getMonth();
    let year = convertDate.getFullYear();
    return !Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year);
};

console.log(canConvertToDate('2016-11-18T00:00:00'));

//Task 7
let daysBetween = (date1, date2) => {
    let difference = date2 - date1;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.round(difference / millisecondsPerDay);
};

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

//Task 8
const task8Data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "birthday": '2016-03-18T00:00:00',
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "birthday": '1991-02-11T00:00:00',
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "birthday": '1984-04-17T00:00:00',
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "birthday": '1994-04-17T00:00:00',
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];


let getAmountOfAdultPeople = (users) => {
    let usersFiltered = filterArray(users, el => {
        const dateDifference = daysBetween(new Date(el.birthday), Date.now());
        const daysPerYear = 365;
        const age = dateDifference / daysPerYear;
        return age > 18;
    });
    return usersFiltered.length;
};

console.log(getAmountOfAdultPeople(task8Data));

//Task 9
let keys = (obj) => {
    let result = [];
    for (let propertyName in obj) {
        result.push(propertyName);
    }
    return result;
};

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task 10
let values = (obj) => {
    let result = [];
    for (let propertyName in obj) {
        result.push(obj[propertyName]);
    }
    return result;
};

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));