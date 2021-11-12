"use strict";
exports.__esModule = true;
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var a = new ArrayOfNumbers([1, 8, 17]);
console.log(a.get(1));
// ------------ generic class below ----------------
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
// ----------------------------------------------
var g = new ArrayOfAnything(["a", "b", "c"]);
var element = g.get(0);
var numbers = new ArrayOfAnything([1, 2, 17]);
var el = numbers.get(0);
// ----------- function generics ---------------
function printAnything(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printAnything([2, 5]);
// ---------- generic constraints --------------
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("I am a car.");
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log("I am a house.");
    };
    return House;
}());
// T extends IPrintable - actual constraint
function printCarsOrHouses(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
var u = {
    print: function () {
        console.log("I am U.");
    }
};
printCarsOrHouses([new Car(), new House()]);
