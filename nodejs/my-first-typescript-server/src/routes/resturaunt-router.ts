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


router.get("/getAll", async (req: Request, res: Response) => {

    const resturauntList = await resturauntService.getAll()

    return res.status(OK).json(resturauntList)

})

router.get("/findById/:id", async (req: Request, res: Response) => {

    const {id} = req.params

    const resturauntList = await resturauntService.findById(Number(id))

    return res.status(OK).json(resturauntList)

})



export default router;