export {};

// more appropriate name since the interface only has summary method // btw if I use type alias, works the same
interface TReportable {
  // name: string
  // year: Date // can assign any type we want
  // broken: boolean
  summary(): string
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `This drink has ${this.sugar} grams of sugar.`
  },
}

// now function must implement just summary(): string
const printSummary = (item: TReportable): void => {
  // console.log(`Name: ${item.name}`)
  // console.log(`Year: ${item.year}`)
  // console.log(`Broken: ${item.broken}`)
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)
