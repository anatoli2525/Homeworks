//1 Given a number. Write a recursive function that reverse the number. Return the new number.
function reverse(n) {
    if (n < 10) {
        return n;
    }
    const a = n % 10;
    const result = Math.floor(n / 10);
    const b = reverse(result);
    const reversed = parseInt(a.toString() + b.toString());
    return reversed;
}
reverse(12345);

//2 Given a number and an array. Find the second occurrence of the number in the array.Consider that the occurrence of each element in the array is at least two.
function findSecondEvent(number, array, index = 0, count = 0) {
    if (index >= array.length) {
        return -1;
    }
    if (array[index] === number) {
        count++;
        if (count === 2) {
            return index;
        }
    }
    return findSecondEvent(number, array, index + 1, count);
}
findSecondEvent(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6])

//3 Given a substring and a string. Find how many times the substring occurred in the string.
function countEvents(subStr, string, count = 0) {
    const index = string.indexOf(subStr);
    if (index === -1) {
        return count;
    } else {
        const newStr = string.substring(index + subStr.length);
        return countEvents(subStr, newStr, count + 1);
    }
}
countEvents("asd", "asd www asd");

//4 Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot;have been replaced by &quot;3.14&quot;.
function replacePi(string) {
    str = string.toLowerCase()
    if (str.length === 0 || !str.includes("pi")) {
        return str;
    } else {
        const index = str.indexOf("pi");
        return str.substring(0, index) + "3.14" + replacePi(str.substring(index + 2));
    }
}
replacePi("Picsart pipelines");

//5 Given an array of nested arrays. Write a recursive function that flattens it.
function flater(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flater(item));
        } else {
            result.push(item);
        }
    });
    return result;
}
flater([14, [1, [[[3, []]]], 1], 0])

///6Given a number. Write a function that calculates its sum of the digits and if that sum hasmore than 1 digit find the sum of digits of that number. Repeat that process if neededand return the result.
function sumOfEvents(n) {
    const events = n.toString().split('');
    let result = 0;
    for (let event of events) {
        result += parseInt(event);
    }
    if (result >= 10) {
        return sumOfEvents(result);
    } else {
        return result;
    }
}
sumOfEvents(1234);