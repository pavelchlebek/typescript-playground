export {};

class Vehicle {
  // public drive(): void {
  //   console.log("Brum brum")
  // }
  constructor(public color: string) {} // shortcut for: color: string; constructor(color: string) {this.color = color}

  protected honk(): void {
    console.log("Beep")
  }
}

const v = new Vehicle("orange")
console.log(v.color)

// error - child has different modifier than parent on drive(): now drive(): in parent commented out, hence no error
class Car extends Vehicle {
  // no "public" modifier before "color" because we don't wanna reassign or create another field in car, because "color" belongs to vehicle
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log("Vrum")
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

// const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

const car = new Car(4, "red")
// car.drive() // error because drive is private and accessible only by other method in the class
car.startDrivingProcess()
console.log(car.wheels, car.color)

class Sedan extends Car {
  constructor(public horsePowers: number, w: number, c: string) {
    super(w, c)
  }
  public summary(): void {
    console.log(
      `My car has ${this.horsePowers} horsepowers and ${this.wheels} wheels and it is ${this.color}`
    )
  }
}

const s = new Sedan(575, 4, "blue")
s.summary()

class Bmw extends Sedan {
  constructor(public great: boolean, horsePowers: number, wheels: number, color: string) {
    super(horsePowers, wheels, color)
  }
  public summary(): void {
    console.log(
      `My car has ${this.horsePowers} horsepowers and ${this.wheels} wheels and it is ${this.color} and it is ${this.great} that it's a great car!!!`
    )
  }
}

const bmw = new Bmw(true, 300, 4, "white")
bmw.summary()
