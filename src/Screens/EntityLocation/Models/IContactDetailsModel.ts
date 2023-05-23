
import { IFormattedColumn, IColumnsFormat } from "../../../Models/IShared";


export interface IContactList {
    id:number | null,
    name : string,
    mobile : string,
    telephone : string,
    email :string
}

export interface IContactInfo {
    name: string,
    mobile: string,
    telephone: string,
    email: string
}

export interface IEditContactInfo extends IContactInfo {
    id: number | null
}

export interface IContactColumnsFormat<T> extends Omit<IColumnsFormat<T>, 'rows' | 'setState' | 'refresh' | 'setRefresh'> {}

export interface IContactColumns extends Omit<IFormattedColumn, 'format'> {
    format?: ({ row }: IContactColumnsFormat<IContactList>) => any;
} 
