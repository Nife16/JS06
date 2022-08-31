

const letter: string = "A letter"

const number: number = 0

const addTwoNums = (num1: number, num2: number): Number => {

    return num1-num2
}

class Person {

    name: string

    constructor(name: string) {
        this.name = name
    }

    get getName() {
        return this.name
    }
    set setName(name: string) {
        this.name = name
    }
}

const person: Person = new Person("pablo")


console.log(person.getName)
