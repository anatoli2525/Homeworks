///ex 1
function invert(invertObject) {
    const inverted = {};
    for (const key in invertObject) {
        const value = invertObject[key];
        if (inverted[value]) {
            inverted[value] = [inverted[value], key];
        } else {
            inverted[value] = key;
        }
    }
    return inverted;
}
console.log(invert({ a: '13', b: '23', c: '23' }));

/// ex 2
function Compare(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (const key in obj2) {
        if (key in obj1) {
            return true;
        }
    }
    return true;
}
console.log(Compare({ a: 1 }, { a: 1 }));
console.log(Compare({ a: 1 }, { a: 2 }));
console.log(Compare({}, {}));

///ex 3
function Palindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
console.log(Palindrome("anna"));
console.log(Palindrome("anahit"));

///ex 4
function count(arr) {
    let max = arr[0];
    let min = arr[0];
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > max) {
            max = arr[i + 1];
        }
        if (arr[i + 1] < min) {
            min = arr[i + 1];
        }
    }
    for (let i = min; i <= max; i++) {
        arr1.push(i)
    }
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] == arr1[j]) {
                max--;
            }
        }
    }
    return max;
}
console.log(count([3, 4, 1, 6, 7]));

/// ex5
function test(arr, serch) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == serch) {
            return true
            break;
        }
    }
    return false
}
console.log(test(['24', 'Anahit', 'Anna', '222'], 'Anahit'))
