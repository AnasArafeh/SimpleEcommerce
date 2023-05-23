export interface ICreateAddressDetails {
    entityId: number,
    autoApprove: boolean,
    showPrice: boolean,
    image: FormData,
    accountManagerId: number,
    servicesVisible: boolean,
    bookingsStartingMinutes: number,
    exactMinutes: boolean,
    details: IDetails[],
    location: ILocation,
    imageUrl: string
}

export interface IDetails {
    localeId: number,
    building: string,
    description: string
}

export interface ILocation {
    latitude: number | null,
    longitude: number | null,
    countryId: number,
    details: ILocationDetails[]
}

export interface ILocationDetails {
    locationId: number,
    description: string,
    street: string,
    city: string,
    localeId: number
}

