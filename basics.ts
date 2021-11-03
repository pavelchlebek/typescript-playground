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
