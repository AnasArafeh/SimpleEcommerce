import { IFormattedColumn } from "../../../Models/IShared";
import { IAddVideos } from "../Models/IAddVideosModel";


export const initialAddVideosDetails: IAddVideos = {
    name: '',
    url: ''
}

//todo
export const videosColumns: IFormattedColumn[] = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'url',
        label: 'URL',
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