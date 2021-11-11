"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehicle = /** @class */ (function () {
    // public drive(): void {
    //   console.log("Brum brum")
    // }
    function Vehicle(color) {
        this.color = color;
    } // shortcut for: color: string; constructor(color: string) {this.color = color}
    Vehicle.prototype.honk = function () {
        console.log("Beep");
    };
    return Vehicle;
}());
var v = new Vehicle("orange");
console.log(v.color);
// error - child has different modifier than parent on drive(): now drive(): in parent commented out, hence no error
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    // no "public" modifier before "color" because we don't wanna reassign or create another field in car, because "color" belongs to vehicle
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("Vrum");
    };
    Car.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()
var car = new Car(4, "red");
// car.drive() // error because drive is private and accessible only by other method in the class
car.startDrivingProcess();
console.log(car.wheels, car.color);
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(horsePowers, w, c) {
        var _this = _super.call(this, w, c) || this;
        _this.horsePowers = horsePowers;
        return _this;
    }
    Sedan.prototype.summary = function () {
        console.log("My car has " + this.horsePowers + " horsepowers and " + this.wheels + " wheels and it is " + this.color);
    };
    return Sedan;
}(Car));
var s = new Sedan(575, 4, "blue");
s.summary();
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(great, horsePowers, wheels, color) {
        var _this = _super.call(this, horsePowers, wheels, color) || this;
        _this.great = great;
        return _this;
    }
    Bmw.prototype.summary = function () {
        console.log("My car has " + this.horsePowers + " horsepowers and " + this.wheels + " wheels and it is " + this.color + " and it is " + this.great + " that it's a great car!!!");
    };
    return Bmw;
}(Sedan));
var bmw = new Bmw(true, 300, 4, "white");
bmw.summary();
