let idCounter = 1


class Resturaunt {

    constructor(name, address, phoneNumber, typeOfFood, rating) {

        this.id = idCounter
        idCounter++
        this.name = name
        this.address = address
        this.phoneNumber = phoneNumber
        this.typeOfFood = typeOfFood
        this.rating = rating

    }

    get getId() {
        return this.id
    }

    get getName() {
        return this.name
    }

    set setName(name) {
        this.name = name
    }

    get getAddress() {
        return this.name
    }

    set setAddress(address) {
        this.address = address
    }

    get getPhoneNumber() {
        return this.phoneNumber
    }

    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
    }

    get getTypeOfFood() {
        return this.typeOfFood
    }

    set setTypeOfFood(typeOfFood) {
        this.typeOfFood = typeOfFood
    }

    get getRating() {
        return this.rating
    }

    set setRating(rating) {
        this.rating = rating
    }

}

module.exports = Resturaunt;