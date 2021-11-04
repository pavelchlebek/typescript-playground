"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
newArrayOfStrings[0].toUpperCase(); // now after pressing "." I have IntelliSense recommendation (eg. functions called on strings)
exports.log(newArrayOfStrings[0].length);
var newArrayOfBooleans = insertAtBeginning2([true, false, true], false); // can be called without <boolean>, ts infers from arguments
exports.log(newArrayOfBooleans[0].valueOf());
// ---------------------------------------------------
var addUId = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var docOne = addUId({ name: "Pavel", age: "34" });
exports.log(docOne.name); // property "name" does not exit on type {uId: number}
var personOne = {
    name: "Pavel",
    age: 34
};
// ----------
var addUId2 = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var docTwo = addUId2({ name: "Palko", age: 22 });
exports.log(docTwo.age);
var docThree = addUId2({ name: "Franta", age: 21 }); // works without <>, ts captures argument type
exports.log(docThree.name);
var docFour = addUId2("hello"); // does not make sense but we are allowed to do it
exports.log(docFour);
// -----------------------------------
var addUId3 = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var docFive = addUId3("hello"); // now signals error, we expect here object
exports.log(docFive);
var docSix = addUId3({ name: "Joe" }); // works, we have object with name propterty
exports.log(docSix.name);
var docSeven = addUId3({ age: 34 }); // does not work, argument is object but without name property
exports.log(docSeven);
var docEight = addUId3({ name: "Palko", age: 34, sex: "male", rich: true }); // works, argument is object with name property
exports.log(docEight); // now we have intelliSense suggestions (name, age, sex, rich, uId)
var resOne = {
    uid: 1,
    resourceName: "person",
    data: { name: "Palko" }
};
resOne.data.name;
var resTwo = {
    uid: 2,
    resourceName: "person",
    data: { name: "Palko" }
};
resTwo.data.name; // works thanks to generics
var resThree = {
    uid: 3,
    resourceName: "name",
    data: "Some name"
};
exports.log(resThree.data.toUpperCase()); // now ts knows we have type string stored in data property
var resFour = {
    uid: 5,
    resourceName: "list",
    data: ["butter", "milk", "cocoa"]
};
var resFive = {
    uid: 8,
    resourceName: "some number",
    data: 8
};
// ---------------------------- next example ----------------------------//
function simpleStuffCertain(arg) {
    return arg;
}
var simpleOne = simpleStuffCertain(5); // number
//------------------------------------
function simpleStuffAny(arg) {
    return arg;
}
var simpleTwo = simpleStuffAny(8); // any
simpleTwo.toString(); // no intelliSense suggestions after "."
// ---------------------------------
function simpleStuffGenerics(arg) {
    return arg;
}
var simpleThree = simpleStuffGenerics("Palko");
exports.log(typeof simpleThree);
