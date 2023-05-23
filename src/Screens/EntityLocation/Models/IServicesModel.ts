import { IFormattedColumn, IColumnsFormat } from "../../../Models/IShared";

export interface IServiceColumnsFormat<T> extends Omit<IColumnsFormat<T>, 'rows' | 'setState' | 'refresh' | 'setRefresh'> {}

export interface IServiceColumns extends Omit<IFormattedColumn, 'format'> {
    format?: ({ row }: IServiceColumnsFormat<IOptionService>) => any;
} 

export interface IOptionService {
    id:number,
    entityLocationId: number,
    bookingTypeId: number,
    intervalHour: number,
    intervalMinute: number,
    price: number | null,
    priceFrom: number | null,
    priceTo: number | null,
    discount: number,
    serviceTypeId: number,
    optionsVisible: boolean,
    sortOrder: number | null,
    isDelivery: boolean,
    ownerOnly: boolean,  
    details: IOptionServiceDetails[],
}

export interface IOptionServiceDetails {
    serviceId: number,
    description: string,
    localeId: number,
    title: string,
    name: string,
}

export interface IService {
    id:number,
    name:string
}

export interface ICreateEntityLocationService {
    entityLocationId: number,
    bookingTypeId: number,
    intervalHour: number,
    intervalMinute: number,
    price: number | null,
    priceFrom: number | null,
    priceTo: number | null,
    discount: number,
    serviceTypeId: number,
    optionsVisible: boolean,
    sortOrder: number | null,
    isDelivery: boolean,
    ownerOnly: boolean,  
    details: IOptionServiceDetails[],
    image : FormData,
    imageUrl: string
}