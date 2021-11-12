export {};

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

const a = new ArrayOfNumbers([1, 8, 17])
console.log(a.get(1))

// ------------ generic class below ----------------

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

// ----------------------------------------------

const g = new ArrayOfAnything(["a", "b", "c"])
const element = g.get(0)

const numbers = new ArrayOfAnything([1, 2, 17])
const el = numbers.get(0)

// ----------- function generics ---------------

function printAnything<T>(array: T[]): void {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

printAnything([2, 5])

// ---------- generic constraints --------------

class Car {
  print() {
    console.log("I am a car.")
  }
}

class House {
  print() {
    console.log("I am a house.")
  }
}

interface IPrintable {
  print(): void
}

// T extends IPrintable - actual constraint
function printCarsOrHouses<T extends IPrintable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

const u = {
  print: function () {
    console.log("I am U.")
  },
}

printCarsOrHouses<Car>([new Car(), new House(), u]) // works for all Houses, Cars and other IPrintable
