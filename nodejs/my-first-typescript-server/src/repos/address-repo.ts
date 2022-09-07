import { IAddress } from '@models/address';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';


// **** Functions **** //

/**
 * Get one user
 */
async function save(address: IAddress): Promise<void> {
  const db = await orm.openAddressDb();
  console.log(db)
  address.id = getRandomInt();
  db.address.push(address)

  return orm.saveAddressDb(db)
}


export default {
  save
} as const;
