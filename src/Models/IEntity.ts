import { IPagingInfo, ISearchInfo } from "./IShared"

export interface IEntity {
    id: number,
    imageUrl: string,
    details: IEntityDetails[]
}

export interface IEntityDetails {
    entityId: number,
    title: string,
    summary: string,
    description: string,
    localeId: number,
    defaultOptionName: string,
    defaultOptionDescription: string
}
export interface ICategoryList {
    id: number,
    name: string
}

export interface IEntityListRequest extends IPagingInfo, ISearchInfo {

}
export interface IIncompleteEntityListRequest extends IEntityListRequest {

}
