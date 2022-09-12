import { IAddress } from '@models/address';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';


// **** Functions **** //

/**
 * Get one user
 */
async function save(address: IAddress): Promise<void> {
  const db = await orm.openAddressDb();
  address.id = getRandomInt();
  db.address.push(address)

  return orm.saveAddressDb(db)
}

async function getById(id: number): Promise<IAddress | null> {
  const db = await orm.openAddressDb();

  for (const address of db.address) {

    if (id === address.id) {

      return address

    }

  }

  return null
}

async function update(address: IAddress): Promise<IAddress | null> {

  const db = await orm.openAddressDb();

  for (let i = 0; i < db.address.length; i++) {

    if (db.address[i].id === address.id) {

      db.address[i] = address;
      console.log(db.address[i])
      orm.saveAddressDb(db)

      return db.address[i]
    }

  }
  return null

}

async function deleteAddress(id: number): Promise<void> {

  const db = await orm.openResturauntDb()

  for (let index = 0; index < db.address.length; index++) {

    if (db.address[index].id === id) {
      db.address.splice(index, 1)
      orm.saveAddressDb(db)
    }

  }

}

async function persists(id: number): Promise<boolean> {
  const db = await orm.openResturauntDb();
  for (const resturaunt of db.resturaunts) {
    if (resturaunt.id === id) {
      return true;
    }
  }
  return false;
}


export default {
  save,
  getById,
  update,
  deleteAddress
} as const;
