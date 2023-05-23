import { Language } from "../../../Store/LanguageEnum";
import { IEditAddressDetials } from "../Models/IEditAddressDetailsModel";

export const initialEditAddressDetails: IEditAddressDetials = {
    id: 0,
    accountManagerId: 0,
    autoApprove: false,
    bookingsStartingMinutes: 0,
    details: [
        {
            entityLocationId: 0,
            building: '',
            description: '',
            localeId: Language.En
        },
        {
            entityLocationId: 0,
            building: '',
            description: '',
            localeId: Language.Ar
        }
    ],
    entityId: 0,
    exactMinutes: true,
    image: new FormData(),
    location: {
        countryId: 0,
        id: 0,
        latitude: null,
        longitude: null,
        details: [
            {
                city: '',
                description: '',
                localeId: Language.En,
                locationId: 0,
                street: ''
            },
            {
                city: '',
                description: '',
                localeId: Language.Ar,
                locationId: 0,
                street: ''
            }
        ]
    },
    servicesVisible: false,
    showPrice: false,
    imageUrl: ""
}