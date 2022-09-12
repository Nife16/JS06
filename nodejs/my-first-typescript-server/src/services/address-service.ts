// **** Functions **** //

import { IAddress } from "@models/address";
import addressRepo from '@repos/address-repo';

/**
 * Get all users
 */
function saveAddress(address: IAddress): Promise<void> {
    return addressRepo.save(address)
}

function getAddressById(id: number): Promise<IAddress | null> {

    return addressRepo.getById(id)
}

function updateAddress(address: IAddress): Promise<IAddress | null> {

    return addressRepo.update(address)

}

function deleteAddress(id: number): Promise<void> {

    return addressRepo.deleteAddress(id)

}


export default {
    saveAddress,
    getAddressById,
    updateAddress,
    deleteAddress
} as const;