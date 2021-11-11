"use strict";
exports.__esModule = true;
var oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 30,
    summary: function () {
        return "This drink has " + this.sugar + " grams of sugar.";
    }
};
// now function must implement just summary(): string
var printSummary = function (item) {
    // console.log(`Name: ${item.name}`)
    // console.log(`Year: ${item.year}`)
    // console.log(`Broken: ${item.broken}`)
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
