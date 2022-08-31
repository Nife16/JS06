/*
OOP - Object Oriented Programming

1) Polymorphism -poly, morph (many, forms)

2) Encapsulation - having your objects only editable within their own class, Just do it, Getters and Setters so edit your classes

*/

class Product {

    constructor(name, price, description) {

        this.name = name
        this.price = price
        this.description = description

    }

    // Encapsulation - Editing an objects data only withtin its class

    get getName() {
        return this.name
    }

    set setName(name) {
        this.name = name
    }

    get getPrice() {
        return this.price
    }

    set setPrice(price) {
        this.price = price
    }

    get getDescription() {
        return this.description
    }

    set setDescription(description) {
        this.description = description
    }


}


//Polymorphism, Product having many forms

const lemonade = new Product("lemonade", .25, "Best damn lemonade")
const water =  new Product("water", 1.25, "Bobby Bouche water")


/*
3) Abstraction -  abstraction is the concept of hiding the implementation details from the user,
 and only providing the functionality. Templates

4) Inheritance - Extending functionality down from Parent class to child class

 */

class Vehicle {

    constructor(wheels, engine) {
        // Abstract classes DO NOT make objects

        if(this.constructor === Vehicle) {
            throw new Error("You cannot instantiate this class")
        }
        this.wheels = wheels
        this.engine = engine
    }

    getWheels() {
        throw new Error("You cannot use an abstract method!!!!");
    }

    setWheels() {
        throw new Error("You cannot use an abstract method!!!!");
    }

    getEngine() {
        throw new Error("You cannot use an abstract method!!!!");
    }

    setEngine() {
        throw new Error("You cannot use an abstract method!!!!");
    }

    drive() {
        throw new Error("You cannot use an abstract method!!!!");
    }

    brake() {
        throw new Error("You cannot use an abstract method!!!!");
    }
}

//Extends is utilizing Inheritance, the PickUp class is meant to mimick the functionality of the Vehicle class

class PickUp extends Vehicle {


    constructor(wheels, engine, bed) {
        super(wheels, engine)
        this.bed = bed
    }

    get getWheels() {
        return this.wheels
    }

    set setWheels(wheels) {
        this.wheels = wheels
    }

    get getEngine() {
        return this.engine
    }

    set setEngine(engine) {
        this.engine = engine
    }

    get getBed() {
        return this.bed
    }

    set setBed(bed) {
        this.bed = bed
    }

    drive() {
        console.log('Vroom Vroom')
    }

    brake() {
        console.log("Screeaccchhhh")
    }

  
}

class Motorcycle extends Vehicle {

    constructor(wheels, engine, chain, helmet) {
        super(wheels, engine)
        this.chain = chain
        this.helmet = helmet
    }

    get getWheels() {
        return this.wheels
    }

    set setWheels(wheels) {
        this.wheels = wheels
    }

    get getEngine() {
        return this.engine
    }

    set setEngine(engine) {
        this.engine = engine
    }

    get getChain() {
        return this.chain
    }

    set setChain(chain) {
        this.chain = chain
    }

    get getHelmet() {
        return this.helmet
    }

    set setHelmet(helmet) {
        this.helmet = helmet
    }
    
    drive() {
        console.log('Bluh bluh bluh bluh')
    }

    brake() {
        console.log("Smooth sounding")
    }

    popAWheelie() {
        console.log("Wheelie is popped")
    }

}

// const vehicle = new PickUp(4, "8 cylinder", "6 foot")
// const harley = new Motorcycle(2, "1000CC", "shiny", "safe")
// const hyabusa = new Motorcycle(2, "TOOMANY", "flashy", "not safe")

// let num1;

class Animal {

    makeNoise() {
        console.log("Noise")
    }

    breathe() {
        throw new Error("Make your own class breath in its own way")
    }
}


class Dog  extends Animal {


    makeNoise() {
        console.log('Woof')
    }

    breathe() {
        console.log("Slobbery noise")
    }



}

const dog = new Dog()
dog.breathe()