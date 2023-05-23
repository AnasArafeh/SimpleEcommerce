import {  ISharedAction, SET_OPEN_SIDE_NAV, SET_MINI_SIDE_NAV } from "../Interfaces/ISharedActions";


const SetOpenSidenav = dispatch => (data: boolean): ISharedAction => dispatch({
    type: SET_OPEN_SIDE_NAV,
    payload: data
});

const SetMiniSidenav = dispatch => (data: boolean): ISharedAction => dispatch({
    type: SET_MINI_SIDE_NAV,
    payload: data
});


export const sharedActions = {
    SetOpenSidenav,
    SetMiniSidenav
}