import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { ParamMissingError } from '@shared/errors';
import addressService from '@services/address-service';


// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;


// **** Routes **** //

/**
 *  Create Resturuant
 */

router.post("/create",  async (req: Request, res: Response) => {

    const { address } = req.body

    if (!address) {
        throw new ParamMissingError();
    }

    addressService.saveAddress(address)


    return res.status(OK).json(address)

})


export default router;