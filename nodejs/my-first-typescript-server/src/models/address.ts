export interface IAddress {
    id: number
    houseNumber: string
    streetName: string
    city: string
    state: string
    zipCode: number
}

function create(houseNumber: string, streetName: string, city: string, state: string, zipCode: number): IAddress {
    return {
      id: -1,
      houseNumber,
      streetName,
      city,
      state,
      zipCode
    };
}

export default {
    create: create
  };