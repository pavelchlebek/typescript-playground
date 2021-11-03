"use strict";
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
function printValue(val) {
    if (typeof val === "number") {
        console.log("Je to cislo!");
    }
    else if (typeof val === "string") {
        console.log("je to string");
    }
    else {
        console.log("Je to jeste neco jineho");
    }
}
printValue(15);
