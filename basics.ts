export {};

type TPerson = {
  name: string
  age: number
}

let person: TPerson = {
  name: "Pavel",
  age: 34,
}

let oldMan: TPerson = {
  name: "Havel",
  age: 17,
}

// console.log(person)

let people: { name: string; age: number }[]

people = [
  { age: 15, name: "Palko" },
  { age: 17, name: "Lenka" },
]

let morePeople: TPerson[] = [
  { age: 15, name: "Palko" },
  { age: 17, name: "Lenka" },
]

const names = people.map((person, index) => {
  return { name: person.name, rank: index + 1 }
})

// console.log(names)

// union types
let course: string | number = "React and Typescript"

course = 1587

console.log(typeof course)

let pok: number | string = "pok"

console.log(typeof pok)

// in this function ts infers return value: number
// if I try do let name: string = add(5,17) ts will detect type error
function add(a: number, b: number) {
  return a + b
}

// let name: string = add(5, 17)

console.log(add(17, 15))

// void return type
function printOutput(value: any) {
  console.log(value)
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

class Color {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const color = new Color("lightblue")

// functions annotations

// ------ nasty -----
const logNumber: (i: number) => void = (i) => {
  console.log(i)
}

logNumber(28)

//-----------

type logNumber = (i: number) => void

const logNumber2: logNumber = (i) => {
  console.log(i)
}

const logDoubleNumber: logNumber = (i) => {
  console.log(i * 2)
}

logNumber2(88)
logDoubleNumber(55)

// --------better---------------

const logString = (i: string): void => {
  console.log(i)
}

logString("Palko je borec!!!")

// ----------best --------

const logObject = (obj: {}) => {
  console.log(obj)
}

logObject({ name: "Pavel", age: 34 })

// ------------------ never -----------------

const throwError = (message: string): never => {
  // here "never" means that we will never reach the end of the function
  throw new Error(message)
}

// throwError("Error occurred")

// -------------- function annotation with argument destructuring

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
}

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)

// ------------ annotation around objects ---------------------

const profile = {
  name: "Alex",
  age: 27,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  },
}

const { age }: { age: number } = profile

// destructure lat, lng without TS
// const {coords: {lat, lng}} = profile

// destructuring nested object
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile

console.log(lat, lng)

profile.setAge(34)

console.log(profile.age)

// ----------------- arrow function in object using this -----------------------

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name)
    }, 100)
  }
  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name)
    }, 100)
  }
}

let p = new Person("Pavel")

// p.printNameArrow()
// p.printNameFunction()

const o = {
  name: "Pavel",
  printNameArrow: () => {
    console.log("Arrow: " + this.name)
  },
  printNameFunction() {
    console.log("Function:  " + this.name)
  },
}

o.printNameArrow()
o.printNameFunction()

class Human {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName() {
    console.log(this.name)
  }
}

const h = new Human("Pavlík")
h.printName()
