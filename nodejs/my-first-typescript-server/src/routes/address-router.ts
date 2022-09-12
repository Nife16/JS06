import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { AddressNotFoundError, ParamMissingError } from '@shared/errors';
import addressService from '@services/address-service';
import { IAddress } from '@models/address';


// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = StatusCodes;


// **** Routes **** //

/**
 *  Create Address
 */

router.post("/create",  async (req: Request, res: Response) => {

    const { address } = req.body

    if (!address) {
        throw new ParamMissingError();
    }

    addressService.saveAddress(address)


    return res.status(CREATED).json(address)

})

/**
 *  Get Address
 */

router.get("/getAddress/:id", async (req: Request, res: Response)=> {

    const { id } = req.params

    if (!id) {
        throw new ParamMissingError()
    }

    addressService.getAddressById(Number(id)).then((address) => {

        if(address === null) {
            throw new AddressNotFoundError()
        }

        return res.status(OK).json(address)

    }).catch(e => {
        console.log(e)
        return res.status(BAD_REQUEST).json({error: e, message: e.message})
    })
})

/**
 *  Update Address
 */

router.post("/updateAddress", async (req: Request, res: Response) => {

    const { address } = req.body

    if (!address) {
        throw new ParamMissingError();
    }

    addressService.updateAddress(address).then((updatedAddress: IAddress | null) => {

        return res.status(OK).json(updatedAddress)

    }).catch(e => {
        console.log(e)
        return res.status(BAD_REQUEST).json({error: e, message: e.message})
    })

})

/**
 *  Delete Address
 */

 router.post("/deleteAddress/:id", async (req: Request, res: Response) => {

    const { id } = req.params

    if (!id) {
        throw new ParamMissingError();
    }

    addressService.deleteAddress(Number(id)).then(() => {

        return res.status(OK).json({message: "deleted"})

    }).catch(e => {
        console.log(e)
        return res.status(BAD_REQUEST).json({error: e, message: e.message})
    })

})


export default router;