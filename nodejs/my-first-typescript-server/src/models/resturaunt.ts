import { IAddress } from "./address"


export interface IResturaunt {
    id: number,
    name: string
    address: IAddress
    phoneNumber: string
    rating: string
    typeOfFood: string
}

function createResturaunt(name: string, address: IAddress, phoneNumber: string, rating: string, typeOfFood: string): IResturaunt {
    return {
        id: -1,
        name,
        address,
        phoneNumber,
        rating,
        typeOfFood
    }
}

export default {
    createResturaunt
}