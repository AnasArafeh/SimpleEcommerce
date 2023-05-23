import { IContactColumns, IContactInfo, IContactList, IEditContactInfo } from "../Models/IContactDetailsModel";

export const initialContactList: IContactList = {
    id: null,
    email: '',
    mobile: '',
    name: '',
    telephone: ''
}

export const initialCreateContactInfo: IContactInfo = {
    email: '',
    mobile: '',
    name: '',
    telephone: ''
}

export const initialEditContactInfo: IEditContactInfo = {
    id: null,
    email: '',
    mobile: '',
    name: '',
    telephone: ''
}


//todo
export const contactColumns: IContactColumns[] = [
    {
        id: 'name',
        label: 'Contact Name',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'email',
        label: 'Contact Email',
        minWidth: 130,
        align: "center",

    },
    {
        id: 'mobile',
        label: 'Contact Mobile',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'telephone',
        label: 'Contact Telephone',
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