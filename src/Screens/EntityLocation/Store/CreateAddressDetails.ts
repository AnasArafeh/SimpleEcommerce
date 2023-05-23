import { Language } from "../../../Store/LanguageEnum";
import { ICreateAddressDetails } from "../Models/ICreateAddressDetailsModel";

export const initialCreateAddressDetails: ICreateAddressDetails = {
    accountManagerId: 1,
    autoApprove: false,
    bookingsStartingMinutes: 0,
    location: {
        countryId: 0,
        longitude: null,
        latitude: null,
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
        ],
    },
    details: [
        {
            building: '',
            description: '',
            localeId: Language.En
        },
        {
            building: '',
            description: '',
            localeId: Language.Ar
        }
    ],
    entityId: 0,
    exactMinutes: true,
    image: new FormData(),
    servicesVisible: false,
    showPrice: false,
    imageUrl: ""
}