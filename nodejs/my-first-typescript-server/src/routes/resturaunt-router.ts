import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { IResturaunt } from '@models/resturaunt';
import { ParamMissingError } from '@shared/errors';
import resturauntService from '@services/resturaunt-service';


// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;


// **** Routes **** //

/**
 *  Create Resturuant
 */

router.post("/create",  async (req: Request, res: Response) => {

    const { resturuant } = req.body

    if (!resturuant) {
        throw new ParamMissingError();
    }

    const savedRestuaunt = await resturauntService.saveResturaunt(resturuant)


    return res.status(OK).json(savedRestuaunt)

})

/**
 *  Get All Resturuant
 */

router.get("/getAll", async (req: Request, res: Response) => {

    const resturauntList = await resturauntService.getAll()

    return res.status(OK).json(resturauntList)

})

/**
 *  Find Resturuant by ID
 */

router.get("/findById/:id", async (req: Request, res: Response) => {

    const {id} = req.params

    if (!id) {
        throw new ParamMissingError();
    }


    const resturauntList = await resturauntService.findById(Number(id))

    return res.status(OK).json(resturauntList)

})

/**
 *  Update Resturuant
 */

 router.post("/updateResturaunt", async (req: Request, res: Response) => {

    const {resturaunt} = req.body

    if (!resturaunt) {
        throw new ParamMissingError();
    }

    const updatedResturuant = await resturauntService.updateResturaunt(resturaunt)

    return res.status(OK).json({updatedResturuant})

})

/**
 *  Delete Resturuant
 */

 router.delete("/deleteResturaunt/:id", async (req: Request, res: Response) => {

    const {id} = req.params

    if (!id) {
        throw new ParamMissingError();
    }

    await resturauntService.deleteResturaunt(Number(id))

    return res.status(OK).json({message:"deleted"})

})


export default router;