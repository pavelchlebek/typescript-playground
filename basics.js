"use strict";
var _this = this;
exports.__esModule = true;
var person = {
    name: "Pavel",
    age: 34
};
var oldMan = {
    name: "Havel",
    age: 17
};
// console.log(person)
var people;
people = [
    { age: 15, name: "Palko" },
    { age: 17, name: "Lenka" },
];
var morePeople = [
    { age: 15, name: "Palko" },
    { age: 17, name: "Lenka" },
];
var names = people.map(function (person, index) {
    return { name: person.name, rank: index + 1 };
});
// console.log(names)
// union types
var course = "React and Typescript";
course = 1587;
console.log(typeof course);
var pok = "pok";
console.log(typeof pok);
// in this function ts infers return value: number
// if I try do let name: string = add(5,17) ts will detect type error
function add(a, b) {
    return a + b;
}
// let name: string = add(5, 17)
console.log(add(17, 15));
// void return type
function printOutput(value) {
    console.log(value);
}
// overloading
// function con(a: string, b: string): string {
//   return a + b
// }
// function con(a: number, b: number): number {
//   return a + b
// }
// function printValue(val: any) {
//   if (typeof val === "number") {
//     console.log("Je to cislo!")
//   } else if (typeof val === "string") {
//     console.log("je to string")
//   } else {
//     console.log("Je to jeste neco jineho")
//   }
// }
// printValue(15)
var Color = /** @class */ (function () {
    function Color(name) {
        this.name = name;
    }
    return Color;
}());
var color = new Color("lightblue");
// functions annotations
// ------ nasty -----
var logNumber = function (i) {
    console.log(i);
};
logNumber(28);
var logNumber2 = function (i) {
    console.log(i);
};
var logDoubleNumber = function (i) {
    console.log(i * 2);
};
logNumber2(88);
logDoubleNumber(55);
// --------better---------------
var logString = function (i) {
    console.log(i);
};
logString("Palko je borec!!!");
// ----------best --------
var logObject = function (obj) {
    console.log(obj);
};
logObject({ name: "Pavel", age: 34 });
// ------------------ never -----------------
var throwError = function (message) {
    // here "never" means that we will never reach the end of the function
    throw new Error(message);
};
// throwError("Error occurred")
// -------------- function annotation with argument destructuring
var todaysWeather = {
    date: new Date(),
    weather: "sunny"
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
// ------------ annotation around objects ---------------------
var profile = {
    name: "Alex",
    age: 27,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
// destructure lat, lng without TS
// const {coords: {lat, lng}} = profile
// destructuring nested object
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(lat, lng);
profile.setAge(34);
console.log(profile.age);
// ----------------- arrow function in object using this -----------------------
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.printNameArrow = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Arrow: " + _this.name);
        }, 100);
    };
    Person.prototype.printNameFunction = function () {
        setTimeout(function () {
            console.log("Function: " + this.name);
        }, 100);
    };
    return Person;
}());
var p = new Person("Pavel");
// p.printNameArrow()
// p.printNameFunction()
var o = {
    name: "Pavel",
    printNameArrow: function () {
        console.log("Arrow: " + _this.name);
    },
    printNameFunction: function () {
        console.log("Function:  " + this.name);
    }
};
o.printNameArrow();
o.printNameFunction();
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.printName = function () {
        console.log(this.name);
    };
    return Human;
}());
var h = new Human("Pavlík");
h.printName();
