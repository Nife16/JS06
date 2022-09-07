// **** Functions **** //

import { IResturaunt } from "@models/resturaunt";
import resturauntRepo from '@repos/resturaunt-repo';
import { ResturauntNotFoundError } from "@shared/errors";


function saveResturaunt(resturaunt: IResturaunt): Promise<IResturaunt> {
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


export default {
    saveResturaunt,
    getAll,
    findById
} as const;