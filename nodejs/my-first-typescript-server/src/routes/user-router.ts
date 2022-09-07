import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';
import { ISignInUser, IUser } from '@models/user-model';


// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, INTERNAL_SERVER_ERROR } = StatusCodes;

// Paths
export const p = {
  get: '/all',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
} as const;


// **** Routes **** //

/**
 * Get all users
 */
router.get('/all', async (_: Request, res: Response) => {

  const users = await userService.getAll()
  return res.status(OK).json({users})

    // userService.getAll().then((users)=> {

    //   console.log(users)
    //   return res.status(OK).json({users})

    // }).catch((error) => {

    //   return res.status(INTERNAL_SERVER_ERROR).json({error: error})

    // });

});


/**
 * Sign Up
 */
router.post("/signUp", (req: Request, res: Response) => {

    const user = req.body

    if (!user) {
      throw new ParamMissingError();
    }

    userService.signUp(user)

    return res.status(CREATED).json({info:"success"});

})

/**
 * Sign In
 */
 router.post("/signIn", async (req: Request, res: Response) => {

  const user: ISignInUser = req.body
  
  if (user.email === undefined || user.password === undefined) {
    throw new ParamMissingError();
  }

  const signedInUser = await userService.signIn(user)

  if(signedInUser === null) {
    return res.status(StatusCodes.BAD_REQUEST).json({info:"Email and password combination do not match."});
  }

  return res.status(OK).json(signedInUser);

})


/**
 * Find User By Email
 */
 router.get("/findByEmail/:email", (req: Request, res: Response) => {

  const { email } = req.params
  
  //const user = await userService.findByEmail(email)


  userService.findByEmail(email).then((user) => {
    return res.status(OK).json(user)
  }).catch((error) => {
    return res.status(INTERNAL_SERVER_ERROR).json({error:error})
  })

  //return res.status(OK).json(user);

 })


/**
 * Add one user
 */
// router.post(p.add, async (req: Request, res: Response) => {
//   const { user } = req.body;
//   // Check param
//   if (!user) {
//     throw new ParamMissingError();
//   }
//   // Fetch data
//   await userService.addOne(user);
//   return res.status(CREATED).end();
// });

/**
 * Update one user
 */
router.put('/update', async (req: Request, res: Response) => {
  const { user } = req.body;
  // Check param
  if (!user) {
    throw new ParamMissingError();
  }
  // Fetch data
  await userService.updateOne(user);
  return res.status(OK).end();
});

/**
 * Delete one user
 */
router.delete(p.delete, async (req: Request, res: Response) => {
  const { id } = req.params;
  // Check param
  if (!id) {
    throw new ParamMissingError();
  }
  // Fetch data
  await userService.delete(Number(id));
  return res.status(OK).end();
});


// **** Export default **** //

export default router;
