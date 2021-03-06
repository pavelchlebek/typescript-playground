export {};

export const log = (value) => {
  console.log(value)
}

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array]
  return newArray
}
const demoArray = [1, 2, 3]

const numArr = insertAtBeginning(demoArray, "pslko")

numArr.sort((a, b) => b - a)
const mapped = numArr.map((item) => item.length)

console.log(numArr, mapped)

const arr = insertAtBeginning(["palko", "lenka"], "olga")

const reduced = arr.reduce((prev, curr) => prev + curr)

const lengths = arr.map((item) => item * 0.9)

console.log(arr, lengths, reduced)

const pavel: any = "pavel"

const res = pavel * 8

log(res)

// above we have following issue: because array is any[] later on typescript dose not pick up error if
const arrayOfNumbers = insertAtBeginning([10, 6, 15], 17)
arrayOfNumbers[0].length // this will result in run-time error, ts does not signal error because the type of array element is any

// see https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890194#overview

function insertAtBeginning2<T>(array: T[], value: T) {
  return [value, ...array]
}

const arrayOfStrings = ["Pavel", "Lenka", "Olga", "Sandra"]

const newArrayOfStrings = insertAtBeginning2<string>(arrayOfStrings, "Eva")
newArrayOfStrings[0].toUpperCase() // now after pressing "." I have IntelliSense recommendation (eg. functions called on strings)
log(newArrayOfStrings[0].length)

const newArrayOfBooleans = insertAtBeginning2([true, false, true], false) // can be called without <boolean>, ts infers from arguments
log(newArrayOfBooleans[0].valueOf())

// ---------------------------------------------------

const addUId = (obj: object) => {
  const uId = Math.floor(Math.random() * 100)
  return { ...obj, uId }
}

let docOne = addUId({ name: "Pavel", age: "34" })

log(docOne.name) // property "name" does not exit on type {uId: number}

//--------- with generics ----------------

type TPerson = {
  name: string
  age: number
}

const personOne: TPerson = {
  name: "Pavel",
  age: 34,
}

// ----------

const addUId2 = <T>(obj: T) => {
  const uId = Math.floor(Math.random() * 100)
  return { ...obj, uId }
}

const docTwo = addUId2<TPerson>({ name: "Palko", age: 22 })

log(docTwo.age)

const docThree = addUId2({ name: "Franta", age: 21 }) // works without <>, ts captures argument type

log(docThree.name)

const docFour = addUId2("hello") // does not make sense but we are allowed to do it

log(docFour)

// -----------------------------------

const addUId3 = <T extends { name: string }>(obj: T) => {
  const uId = Math.floor(Math.random() * 100)
  return { ...obj, uId }
}

const docFive = addUId3("hello") // now signals error, we expect here object

log(docFive)

const docSix = addUId3({ name: "Joe" }) // works, we have object with name propterty

log(docSix.name)

const docSeven = addUId3({ age: 34 }) // does not work, argument is object but without name property

log(docSeven)

const docEight = addUId3({ name: "Palko", age: 34, sex: "male", rich: true }) // works, argument is object with name property

log(docEight) // now we have intelliSense suggestions (name, age, sex, rich, uId)

// ------------- generics with interfaces ---------------------------------//

interface Resource {
  uid: number
  resourceName: string
  data: object
}

const resOne: Resource = {
  uid: 1,
  resourceName: "person",
  data: { name: "Palko" },
}

resOne.data.name

// ----- with generics

interface Resource2<T> {
  uid: number
  resourceName: string
  data: T
}

const resTwo: Resource2<{ name: string }> = {
  uid: 2,
  resourceName: "person",
  data: { name: "Palko" },
}

resTwo.data.name // works thanks to generics

const resThree: Resource2<string> = {
  uid: 3,
  resourceName: "name",
  data: "Some name",
}

log(resThree.data.toUpperCase()) // now ts knows we have type string stored in data property

const resFour: Resource2<string[]> = {
  uid: 5,
  resourceName: "list",
  data: ["butter", "milk", "cocoa"],
}

const resFive: Resource2<number> = {
  uid: 8,
  resourceName: "some number",
  data: 8,
}

// ---------------------------- next example ----------------------------//

function simpleStuffCertain(arg: number) {
  return arg
}

const simpleOne = simpleStuffCertain(5) // number

//------------------------------------

function simpleStuffAny(arg) {
  return arg
}

const simpleTwo = simpleStuffAny(8) // any
simpleTwo.toString() // no intelliSense suggestions after "."

// ---------------------------------

function simpleStuffGenerics<T>(arg: T): T {
  return arg
}

const simpleThree = simpleStuffGenerics("Palko").slice(0, 2) // suggestion support - all methods callable on string
log(typeof simpleThree) // string

// -------------------- next example from Ben Awad ------------------ //

// aim is to write a function that will return last element of given arr, also it needs to return the value with certain type (not "any")

// we can have any kinds of array but we lose the type which here is "any"
const last = (arr: Array<any>) => {
  return arr[arr.length - 1]
}

const l = last([1, 2, 3]) // any

// here we will have generic function to get the last element of an array with proper type

const lastGenerics = <T>(arr: Array<T>) => {
  return arr[arr.length - 1]
}

const lGen = lastGenerics(["a", "b", "c"]) // string, here TS infers the type from the argument, however, we can explicitly say what type we want as below
const lGen2 = lastGenerics<string>(["e", "f", "g"])

const object = lastGenerics([
  { name: "Pavel", age: 34 },
  { name: "Jura", age: 26, level: 3 },
])

log(object.level) // TS inferred the type from argument, level was suggested

const mixed = lastGenerics([7, 8]) // number

// ------ tuple --------------

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const tupleOne = makeTuple(18, "Olga")
const tupleTwo = makeTuple("palko", 34)
const tupleThree = makeTuple(10, 10)

// ------------ with constraints ----------------------------

interface IName {
  firstName: string
  lastName: string
}

const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  }
}

const user = {
  id: "ft1012",
  firstName: "Palko",
  lastName: "Fekerznehy",
}

const i = makeFullName(user)

// weird behaviour: we have extra property id on user but there is n signal when calling the function
// however, when calling makeFullName with {...} error is caught

const newUser = makeFullName({ firstName: "Palko", lastName: "Chleb??k", age: 34 })
console.log(newUser)

// generics with constraints makes it possible to give argument to a function that has at least properties specified after "extends"

const makeFullName2 = (obj: IName) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  }
}

const user1 = makeFullName2({ firstName: "pavel", lastName: "chlebek", age: 18 }) // see error message
const user2 = makeFullName2({ firstName: "pavel", lastName: "chlebek", age: 18 } as IName) // see error message
const user3 = makeFullName2(user) // is without error but returned type does not include property id

// that is why we use <T extends {}> - generics with constraints

interface IPerson {
  name: string
}

const person: IPerson = { name: "palko", age: 30 } // error
const person2: IPerson = { name: "Palko", age: 34 } as IPerson // works, but we lose "age" property

// ---------------------------------------------------------------------------

interface Tab<T> {
  id: string
  position: number
  data: T
}

type NumberTab = Tab<number>
type StringTab = Tab<string>
