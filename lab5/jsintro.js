
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

function isVowel(character) {
    charArray = ['A', 'E', 'I', 'O', 'U'];
    if (charArray.includes(character.toUpperCase()))
        return true;

    return false;
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
    }
    return mul;
}

function reverse(str) {
    let reversed = "";
    for (i = str.length - 1; i >= 0; i--) {
        reversed += (str[i]);
    }
    return reversed;
}

function findLongestWord(wordArray) {
    let max = 0;
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > max)
            max = wordArray[i].length;
    }
    return max;
}

function filterLongWords(wordArray, num) {
    let newWordArray = [];
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > num)
            newWordArray.push(wordArray[i]);
    }
    return newWordArray;
}

function mapArray(arr) {
    const b = arr.map(function (elem, i, array) {
        return elem * 10;
    })
    return b;
}

function filterArray(arr){
    const c = arr.filter(function (elem, i, array) {
        return elem === 3;
    });    
    return c;
}

function reduceArray(arr){
    const d = arr.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    }); 
    return d;   
}


/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {

    let incomeParam = function2test();
    if (Array.isArray(expected)) {
        let isSame = expected.length === incomeParam.length && expected.every((value, index) => value === incomeParam[index])
        if (isSame)
            return "TEST SUCCEEDED";
    }

    if (expected === function2test())
        return "TEST SUCCEEDED";
    else
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));

console.log("Expected output of isVowel('E') is true  " + myFunctionTest(true, function () {
    return isVowel('E');
}));

console.log("Expected output of sum([1,2,3]) is 6  " + myFunctionTest(6, function () {
    return sum([1, 2, 3]);
}));

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1, 2, 3, 4]);
}));

console.log("Expected output of reverse('ilkin') is 'nikli'  " + myFunctionTest('nikli', function () {
    return reverse('ilkin');
}));

console.log("Expected output of findLongestWord(['ilkin', 'eren', 'ilkin12345']) is 10  " + myFunctionTest(10, function () {
    return findLongestWord(['ilkin', 'eren', 'ilkin12345']);
}));

console.log("Expected output of filterLongWords(['ilkin', 'eren', 'ilkin12345'], 4) is ['ilkin', 'ilkin12345']  " + myFunctionTest(['ilkin', 'ilkin12345'], function () {
    return filterLongWords(['ilkin', 'eren', 'ilkin12345'], 4);
}));

console.log("Expected output of mapArray([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]  " + myFunctionTest([10, 30, 50, 30, 30], function () {
    return mapArray([1, 3, 5, 3, 3]);
}));

console.log("Expected output of filterArray([1, 3, 5, 3, 3]) is [3, 3, 3]  " + myFunctionTest([3, 3, 3], function () {
    return filterArray([1, 3, 5, 3, 3]);
}));

console.log("Expected output of reduceArray([1, 3, 5, 3, 3]) is 135  " + myFunctionTest(135, function () {
    return reduceArray([1, 3, 5, 3, 3]);
}));
