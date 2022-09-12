import { IAddress } from '@models/address';
import resturaunt, { IResturaunt } from '@models/resturaunt';
import { ResturauntNotFoundError, UserNotFoundError } from '@shared/errors';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';


// **** Functions **** //

/**
 * Save Resturaunt
 */
async function save(resturaunt: IResturaunt): Promise<IResturaunt> {
  const db = await orm.openResturauntDb();
  resturaunt.id = getRandomInt();
  db.resturaunts.push(resturaunt)

  await orm.saveRestuantDb(db)
  return resturaunt
}

async function getAll(): Promise<IResturaunt[]> {
  const db = await orm.openResturauntDb();
  return db.resturaunts
}

async function findById(id: number): Promise<IResturaunt | null> {
  const db = await orm.openResturauntDb();

  for (const resturaunt of db.resturaunts) {
    if (id === resturaunt.id) {
      return resturaunt
    }
  }
  return null
}

async function update(resturaunt: IResturaunt): Promise<IResturaunt | null> {
  const db = await orm.openResturauntDb();

  for (let index = 0; index < db.resturaunts.length; index++) {
    
    if(db.resturaunts[index].id === resturaunt.id) {

      db.resturaunts[index] = resturaunt
      orm.saveRestuantDb(db)
      return db.resturaunts[index]
    }
    
  }
  return null
}

async function deleteResturaunt(id: number): Promise<void> {

  const db = await orm.openResturauntDb();
  for (let index = 0; index < db.resturaunts.length; index++) {
    
    if(db.resturaunts[index].id === id) {

      db.resturaunts.splice(index, 1)
      orm.saveRestuantDb(db)

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
  getAll,
  findById,
  update,
  deleteResturaunt,
  persists
} as const;
