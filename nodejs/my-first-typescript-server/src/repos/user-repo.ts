import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one user
 */
async function getOne(email: string): Promise<IUser | null> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.email === email) {
      return user;
    }
  }
  return null;
}

/**
 * Find By Email and Password
 */
 async function findByEmailAndPassword(email: string, password: string): Promise<IUser | null> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.email === email && user.password === password) {
      return user;
    }
  }
  return null;
}

/**
 * See if a user with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
  const db = await orm.openDb();
  return db.users;
}

/**
 * Save user.
 * 
 * @param user 
 * @returns 
 */
 async function save(user: IUser): Promise<void> {

  return await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      password: user.password
    }
  })
}

/**
 * Add one user.
 */
async function add(user: IUser): Promise<void> {
  const db = await orm.openDb();
  //user.id = getRandomInt();
  db.users.push(user);
  return orm.saveDb(db);
}

/**
 * Update a user.
 */
async function update(user: IUser): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].id === user.id) { 
      db.users[i] = user;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 */
async function _delete(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].id === id) {
      db.users.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}


//DOING DEVIOUS THINGS!!! >:)

// **** Export default **** //

export default {
  getOne,
  findByEmailAndPassword,
  persists,
  getAll,
  add,
  save,
  update,
  delete: _delete,
} as const;
