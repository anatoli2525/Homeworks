//find

const myFind = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]), i, arr) {
            return arr[i];
        }
    }
    return -1
}
console.log(myFind([1, 2, 3, 4, 5], (value) => value > 1));

//filter

const myFilter = function (arr, callback) {
    const filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
}
myFilter([1, 2, 3, 4, 5, 6], (value) => value % 2 === 0);



//map
const myMap = function (arr, callback) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]), i, arr);
    }
    return newArr
}
myMap([1, 2, 3, 4, 5], (value) => console.log(value * 2));

//every
const myEvery = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i]), i, arr) {
            return false;
        }
    }
    return true;
}
console.log(myEvery([1, 2, 3, 4, 5], (value) => value > 0));

//some

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(array[i], i, arr)) {
            return true;
        }
    }
    return false;
}
console.log(mySome([1, 2, 3, 4, 5], (element) => element > 3));

//findindex

const myFindindex = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]), i, arr) {
            return i;
        }
    }
    return -1
}
console.log(myFindindex([1, 2, 3, 4, 5], (value) => value === 10));

// foreach
const myForeach = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
myForeach([1, 2, 3, 4, 5], (value) => console.log(value * 2));

//myReduce
const myReduce = function (arr, callback) {
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
};
console.log(myReduce([1, 2, 3, 4, 5], (acc, value) => acc * value));