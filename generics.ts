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
