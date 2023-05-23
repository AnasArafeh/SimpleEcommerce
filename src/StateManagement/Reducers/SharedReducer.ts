import { Context } from "react";
import {  sharedActions } from "../Actions/SharedActions";
import ContextCreater from "../ContextCreator/ContextCreater";
import { ISharedAction, ISharedContext, ISharedState, SET_OPEN_SIDE_NAV, SET_MINI_SIDE_NAV } from "../Interfaces/ISharedActions";

const initialSharedState: ISharedState = {
    openSidenav: true,
    miniSidenav: false
}


const SetOpenSidenavReducer = (state: ISharedState, action: ISharedAction) => {
    return {
        ...state, openSidenav: action.payload
    }
}

const SetMiniSidenavReducer = (state: ISharedState, action: ISharedAction) => {
    return {
        ...state, miniSidenav: action.payload
    }
}


export function SharedReducer(state: ISharedState, action: ISharedAction): ISharedState {
    switch (action.type) {
        case SET_OPEN_SIDE_NAV:
            return SetOpenSidenavReducer(state, action);
        case SET_MINI_SIDE_NAV:
            return SetMiniSidenavReducer(state, action);
        default:
            return state;
    }
}

const context = ContextCreater(
    SharedReducer,
    sharedActions,
    initialSharedState
);

const SharedContext: Context<ISharedContext> = context.Context;
const SharedProvider = context.Provider;

export { SharedProvider, SharedContext }
