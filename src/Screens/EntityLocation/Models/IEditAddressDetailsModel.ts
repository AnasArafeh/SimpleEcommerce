export interface IEditAddressDetials {
    id: number,
    entityId: number,
    autoApprove: boolean,
    showPrice: boolean,
    image: FormData,
    accountManagerId: number,
    servicesVisible: boolean,
    bookingsStartingMinutes: number,
    exactMinutes: boolean,
    details: IEditDetails[],
    location: IEditLocation,
    imageUrl: string
}

export interface IEditDetails {
    entityLocationId: number,
    localeId: number,
    building: string,
    description: string
}

export interface IEditLocationDetails {
    locationId: number,
    description: string,
    street: string,
    city: string,
    localeId: number
}

export interface IEditLocation {
    id: number,
    latitude: number | null,
    longitude: number | null,
    countryId: number,
    details: IEditLocationDetails[]
}