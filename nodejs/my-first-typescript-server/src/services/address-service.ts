// **** Functions **** //

import { IAddress } from "@models/address";
import addressRepo from '@repos/address-repo';

/**
 * Get all users
 */
function saveAddress(address: IAddress): Promise<void> {
    return addressRepo.save(address)
}


export default {
    saveAddress
} as const;