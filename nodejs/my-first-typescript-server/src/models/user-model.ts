// **** Types **** //

// User schema
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ISignInUser {
  email: string
  password: string
}

// **** Functions **** //

/**
 * Get a new User object.
 */
function _new(name: string, email: string, password: string): IUser {
  return {
    id: -1,
    email,
    name,
    password
  };
}

// **** Export default **** //

export default {
  new: _new
};
