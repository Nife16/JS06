import userRepo from '@repos/user-repo';
import { ISignInUser, IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';


// **** Functions **** //

/**
 * Get all users
 */
function getAll(): Promise<IUser[]> {
  return userRepo.getAll();
}

/**
 * Get all users
 */
 function findByEmail(email: string): Promise<IUser | null> {
  return userRepo.getOne(email);
}

/**
 * Add one user
 */
 function signUp(user: IUser): Promise<void> {
  return userRepo.save(user);
}

/**
 * Find By Email And PW user
 */
 function signIn(user: ISignInUser): Promise<IUser | null> {
  return userRepo.findByEmailAndPassword(user.email, user.password);
}

/**
 * Update one user
 */
async function updateOne(user: IUser): Promise<void> {
  // const persists = await userRepo.persists(user.id);
  // if (!persists) {
  //   throw new UserNotFoundError();
  // }
  return userRepo.update(user);
}

/**
 * Delete a user by their id
 */
async function _delete(id: number): Promise<void> {
  const persists = await userRepo.persists(id);
  if (!persists) {
    throw new UserNotFoundError();
  }
  return userRepo.delete(id);
}


// **** Export default **** //

export default {
    getAll,
    signUp,
    signIn,
    findByEmail,
    updateOne,
    delete: _delete,
} as const;
