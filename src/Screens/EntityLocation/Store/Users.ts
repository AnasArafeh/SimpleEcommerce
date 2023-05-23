import { IFormattedColumn } from "../../../Models/IShared";
import { ICreateOwnerDetails } from "../../Resource/Models/IOwnerDetailsModel";


export const initialCreateOwnerDetails: ICreateOwnerDetails = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: '',
    team: ''
}


//todo
export const OwnerCompletedInfoColumns: IFormattedColumn[] = [
    {
        id: 'fullName',
        label: 'Full Name',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'mobile',
        label: 'Mobile',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'teams',
        label: 'Teams',
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