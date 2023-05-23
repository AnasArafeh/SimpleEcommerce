import { IAction } from "./IAction";

export const SET_OPEN_SIDE_NAV = "SET_OPEN_SIDE_NAV";
export const SET_MINI_SIDE_NAV = "SET_MINI_SIDE_NAV";
export const SEARCH_TEXT = "searchText";
export const CURRENT_PAGE = "currentPage";
export const ROWS_PER_PAGE = "rowsPerPage";
export const TOTAL_COUNT = "totalCount";

export interface ISharedAction extends IAction {
    payload: any
}


export interface ISharedState {
    openSidenav: boolean,
    miniSidenav: boolean
}

export interface ISharedContext {
    SetOpenSidenav: (data: boolean) => ISharedAction,
    SetMiniSidenav: (data: boolean) => ISharedAction,
    state: ISharedState
}

