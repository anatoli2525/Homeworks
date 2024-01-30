
//Homework 3

// 1 Determine whether it consists only from uniques or not.
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[0] === arr[j]) {
                return false
            } else {
                break
            }
        }
        arr.shift()
    }
    return true
}
console.log(unique([1, 2, 3, 4, 5]))

// 2 Find the sum of prime numbers.
function sumOfPrimes(arr) {
    function primeNumbers(element) {
        if (element <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(element); i++) {
            if (element % i === 0) {
                return false;
            }
        }
        return true;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (primeNumbers(arr[i]))
            sum += arr[i]
    }
    return sum;
}
console.log("Sum of Prime Numbers", sumOfPrimes([1, 2, 2, 4, 5, 5]));

// 3 Find the pair of adjacent elements that has the largest product and return that product.
function findMaxPair(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i] * arr[i++];
        if (product > result) {
            result = product;
        }
        product = 0;
    }
    return result;
}
console.log("Max Product:", findMaxPair([1, 2, 5, 5, 4]));


// 4 Find the index of that element using binary search.
function search(arr, target) {
    let left = 0
    let right = arr.length - 1
    let mid
    while (left <= right) {
        mid = Math.round((right - left) / 2 + left)
        if (target === arr[mid]) {
            return mid;
        }
        else if (target < arr[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))