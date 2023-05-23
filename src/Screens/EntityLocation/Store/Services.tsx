import { Language } from "../../../Store/LanguageEnum";
import { ICreateEntityLocationService, IServiceColumns } from "../Models/IServicesModel";


export const initialEntityLocationServices: ICreateEntityLocationService = {
    bookingTypeId: 0,
    discount: 0,
    entityLocationId: 0,
    intervalHour: 0,
    intervalMinute: 0,
    optionsVisible: false,
    isDelivery: false,
    ownerOnly: false,
    price: null,
    priceFrom: null,
    priceTo: null,
    serviceTypeId: 0,
    sortOrder: 0,
    details: [{
        description: '',
        localeId: Language.En,
        name: '',
        serviceId: 0,
        title: ''
    },
    {
        description: '',
        localeId: Language.Ar,
        name: '',
        serviceId: 0,
        title: ''
    }
    ],
    image: new FormData(),
    imageUrl: ""
}


//todo
export const serviceColumns: IServiceColumns[] = [
    {
        id: 'title',
        label: 'Service',
        minWidth: 130,
        align: "center",
        format: ({ row }) => row.details.find(v => v.localeId === Language.En)!.title
    },
    {
        id: 'description',
        label: 'Description',
        minWidth: 130,
        align: "center",
        format: ({ row }) => row.details.find(v => v.localeId === Language.En)!.description
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 130,
        align: "center",
        format: ({ row }) => row.price ?  row.price : row.priceFrom! + row.priceTo!  + " JOD"
    },
 
    {
        id: 'duration',
        label: 'Duration',
        minWidth: 130,
        align: "center",
        format: ({ row }) => row.intervalHour.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          }) + ':' + row.intervalMinute.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
          })
    },
    {
        id: 'isDelivery',
        label: 'Delivery',
        minWidth: 130,
        align: "center"
    },
    {
        id: 'ownerOnly',
        label: 'OwnerOnly',
        minWidth: 130,
        align: "center",
     
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 130,
        align: "center",
    },
];