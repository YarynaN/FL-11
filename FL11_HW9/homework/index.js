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

//Task 1
let findTypes = (...args) => {
    let objKeys = {};
    for (let i = 0; i < args.length; i++) {
        const previousValue = objKeys[typeof args[i]] || 0;
        objKeys[typeof args[i]] = previousValue + 1;
    }
    return objKeys;
};

//Task 2
let executeForEach = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
};

//Task 3
let mapArray = (arr, fn) => {
    let resultArray = [];
    executeForEach(arr, el => {
        resultArray.push(fn(el));
    });
    return resultArray;
};

//Task 4
let filterArray = (arr, fn) => {
    let resultArray = [];
    executeForEach(arr, el => {
        if (fn(el)) {
            resultArray.push(el);
        }
    });
    return resultArray;
};

//Task 5
let showFormattedDate = (date) => {
    const monNames = [
        'Jan', 'Feb', 'March',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];
    const monIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return `Date: ${monNames[monIndex]} ${day} ${year}`;
};

//Task 6
let canConvertToDate = (strDate) => {
    const date = new Date(strDate);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return !Number.isNaN(day) && !Number.isNaN(month) && !Number.isNaN(year);
};

//Task 7
let daysBetween = (date1, date2) => {
    let difference = date2 - date1;
    const millisecondsInSeconds = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const millisecondsPerDay = millisecondsInSeconds * secondsInMinute * minutesInHour * hoursInDay;
    return Math.round(difference / millisecondsPerDay);
};

//Task 8
let getAmountOfAdultPeople = (users) => {
    const adultAge = 18;
    const usersFiltered = filterArray(users, el => {
        const dateDifference = daysBetween(new Date(el.birthday), Date.now());
        const daysPerYear = 365;
        const age = dateDifference / daysPerYear;
        return age > adultAge;
    });
    return usersFiltered.length;
};

//Task 9
let keys = (obj) => {
    let result = [];
    for (let propertyName in obj) {
        if (obj.hasOwnProperty(propertyName)) {
            result.push(propertyName);
        }
    }
    return result;
};

//Task 10
let values = (obj) => {
    let result = [];
    for (let propertyName in obj) {
        if (obj.hasOwnProperty(propertyName)) {
            result.push(obj[propertyName]);
        }
    }
    return result;
};