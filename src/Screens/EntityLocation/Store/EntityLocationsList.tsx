import { IEntityLocationColumns } from "../Models/IEntityLocationModel";

export const entityLocationsColumns: IEntityLocationColumns[] = [
    {
        id: 'locationId',
        label: 'Id',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'entityName',
        label: 'Entity Name',
        minWidth: 130,
        align: "center"
    },
    {
        id: 'locationText',
        label: 'Location',
        minWidth: 130,
        align: "center"
    },
    {
        id: 'statusName',
        label: 'Status',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'enabled',
        label: 'Enabled',
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