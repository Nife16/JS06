// **** Functions **** //

import { IResturaunt } from "@models/resturaunt";
import resturauntRepo from '@repos/resturaunt-repo';
import { ResturauntNotFoundError } from "@shared/errors";
import addressService from "./address-service";


function saveResturaunt(resturaunt: IResturaunt): Promise<IResturaunt> {

    addressService.saveAddress(resturaunt.address)
    return resturauntRepo.save(resturaunt)
}

function getAll(): Promise<IResturaunt[]> {

    return resturauntRepo.getAll()
}

async function findById(id: number): Promise<IResturaunt | null> {

    const exists = await resturauntRepo.persists(id)
    if (!exists) {
        throw new ResturauntNotFoundError();
    }

    return await resturauntRepo.findById(id)
}

async function updateResturaunt(resturaunt: IResturaunt): Promise<IResturaunt | null> {


    const updatedResturuant = await resturauntRepo.update(resturaunt)

    if(updatedResturuant === null) {

        throw new ResturauntNotFoundError()
    }
    return updatedResturuant
}

function deleteResturaunt(id: number): Promise<void> {

    return resturauntRepo.deleteResturaunt(id)

}


export default {
    saveResturaunt,
    getAll,
    findById,
    updateResturaunt,
    deleteResturaunt
} as const;