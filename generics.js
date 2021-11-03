"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.log = void 0;
var log = function (value) {
    console.log(value);
};
exports.log = log;
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
var numArr = insertAtBeginning(demoArray, "pslko");
numArr.sort(function (a, b) { return b - a; });
var mapped = numArr.map(function (item) { return item.length; });
console.log(numArr, mapped);
var arr = insertAtBeginning(["palko", "lenka"], "olga");
var reduced = arr.reduce(function (prev, curr) { return prev + curr; });
var lengths = arr.map(function (item) { return item * 0.9; });
console.log(arr, lengths, reduced);
var pavel = "pavel";
var res = pavel * 8;
exports.log(res);
// above we have following issue: because array is any[] later on typescript dose not pick up error if
var arrayOfNumbers = insertAtBeginning([10, 6, 15], 17);
arrayOfNumbers[0].length; // this will result in run-time error, ts does not signal error because the type of array element is any
// see https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890194#overview
function insertAtBeginning2(array, value) {
    return __spreadArray([value], array);
}
var arrayOfStrings = ["Pavel", "Lenka", "Olga", "Sandra"];
var newArrayOfStrings = insertAtBeginning2(arrayOfStrings, "Eva");
var newArrayOfBooleans = insertAtBeginning2([true, false, true], false); // can be called without <boolean>, ts infers from arguments
exports.log(newArrayOfBooleans[0].valueOf());
newArrayOfStrings[0].toUpperCase(); // now after pressing "." I have IntelliSense recommendation (eg. functions called on strings)
exports.log(newArrayOfStrings[0].length);
