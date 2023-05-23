import { Context } from "react";
import { IEntityLocationsListRequest } from "../../../../Models/IEntityLocation";
import ContextCreater from "../../../../StateManagement/ContextCreator/ContextCreater";
import { initialCreateContactInfo, initialEditContactInfo } from "../../Store/ContactDetails";
import { initialCreateAddressDetails } from "../../Store/CreateAddressDetails";
import { initialEditAddressDetails } from "../../Store/EditAddressDetails";
import { initialCreateOtherImages } from "../../Store/OtherImages";
import { initialEntityLocationServices } from "../../Store/Services";
import { initialCreateTeams, initialEditTeams } from "../../Store/Teams";
import { initialCreateOwnerDetails } from "../../Store/Users";
import { initialAddVideosDetails } from "../../Store/Videos";
import { initialWorkingHoursState } from "../../Store/WorkingHours";
import { entityLocationActions } from "../Actions/EntityLocationAction";
import {
    SET_CREATE_ADDRESS_DETAILS, SET_CREATE_TEAM_DETAILS,
    SET_CREATE_OWNER_DETAILS, SET_CREATE_OPTION_DETAILS, SET_CREATE_SERVICE_OPTION_DETAILS,
    SET_ADD_VIDEOS_DETAILS, SET_ADD_OPENING_HOURS, IEntityLocationContext, IEntityLocationState, IEntityLocationAction,
    SET_ENTITY_LOCATIONS_LIST_REQUEST, SET_ENTITY_LOCATIONS, SET_IS_LOADING, LIST_COUNT, COUNTRY_LIST, EDIT_ENTITY_LOCATIONS, SET_OTHER_IMAGES, SET_CONTACT_LIST, SET_CREATE_CONTACT, SET_REFRESH, SET_DEPARTMENTS, SET_TEAMS, SET_OPTION_SERVICE, SET_CREATE_OPTION_SERVICE, SET_SERVICES, SET_EDIT_CONTACT, SET_EDIT_TEAM,
} from "../Interfaces/IEntityLocationAction";


const initialEntityLocationsListRequest: IEntityLocationsListRequest = {
    rowsPerPage: 10,
    currentPage: 0,
    searchText: "",
    isComplete: "none"
}

const initialEntityLocationState: IEntityLocationState = {
    createAddressDetails: initialCreateAddressDetails,
    editAddressDetails: initialEditAddressDetails,
    createTeamDetails: initialCreateTeams,
    createOwnerDetails: initialCreateOwnerDetails,
    addVideosDetails: initialAddVideosDetails,
    addOpeningHours: initialWorkingHoursState,
    entityLocationsListRequest: initialEntityLocationsListRequest,
    entityLocations: [],
    entityLocationsCount: 0,
    isLoading: false,
    countryList: [],
    createOtherImages: initialCreateOtherImages,
    contactList: [],
    createContactDetails: initialCreateContactInfo,
    editContactDetails: initialEditContactInfo,
    refresh: false,
    departmentsList: [],
    teamsList: [],
    serviceList: [],
    optionServiceList: [],
    entityLocationServices: initialEntityLocationServices,
    editTeamDetails: initialEditTeams,
}

const SetCreateContactDetailsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, createContactDetails: action.payload
    }
}

const SetEditContactDetailsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, editContactDetails: action.payload
    }
}

const SetEditTeamDetailsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, editTeamDetails: action.payload
    }
}

const SetCreateOtherImagesReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, createOtherImages: action.payload
    }
}

const SetCreateAddressDeatilsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, createAddressDetails: action.payload
    }
}

const SetCreateTeamDeatilsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, createTeamDetails: action.payload
    }
}
const SetCreateOwnerDeatilsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, createOwnerDetails: action.payload
    }
}

const SetCreateOptionDeatilsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, createOptionDetails: action.payload
    }
}

const SetAddVideosDeatilsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, addVideosDetails: action.payload
    }
}

const SetAddOpeningHoursReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, addOpeningHours: action.payload
    }
}

const SetEntityLocationsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, entityLocations: [...action.payload]
    }
}

const SetEntityLocationsListRequestReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, entityLocationsListRequest: { ...state.entityLocationsListRequest, [action.payload.name]: action.payload.value }
    }
}


const SetIsLoadingReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, isLoading: action.payload
    }
}

const SetRefreshReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, refresh: action.payload
    }
}

const SetListCountReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, [action.payload.name]: action.payload.value
    }
}
const SetCountriesListReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, countryList: [...action.payload.value]
    }
}

const SetContactListReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, contactList: [...action.payload.value]
    }
}
const SetEditEntityLocationsReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, editAddressDetails: action.payload
    }
}

const SetDepartmentListReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, departmentsList: [...action.payload.value]
    }
}

const SetTeamListReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, teamsList: [...action.payload.value]
    }
}

const SetOptionServicesReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, optionServiceList: [...action.payload.value]
    }
}

const SetCreateOptionSeriveReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, SetEntityLocationServices: action.payload
    }
}

const SetServicesReducer = (state: IEntityLocationState, action: IEntityLocationAction) => {
    return {
        ...state, serviceList: [...action.payload.value]
    }
}

export function EntityLocationReducer(state: IEntityLocationState, action: IEntityLocationAction): IEntityLocationState {
    switch (action.type) {
        case SET_CREATE_CONTACT:
            return SetCreateContactDetailsReducer(state, action);
        case SET_EDIT_CONTACT:
            return SetEditContactDetailsReducer(state, action);
            case SET_EDIT_TEAM:
            return SetEditTeamDetailsReducer(state, action);
        case SET_CREATE_ADDRESS_DETAILS:
            return SetCreateAddressDeatilsReducer(state, action);
        case SET_CREATE_TEAM_DETAILS:
            return SetCreateTeamDeatilsReducer(state, action);
        case SET_CREATE_OWNER_DETAILS:
            return SetCreateOwnerDeatilsReducer(state, action);
        case SET_CREATE_OPTION_DETAILS:
            return SetCreateOptionDeatilsReducer(state, action);
        case SET_ADD_VIDEOS_DETAILS:
            return SetAddVideosDeatilsReducer(state, action);
        case SET_ADD_OPENING_HOURS:
            return SetAddOpeningHoursReducer(state, action);
        case SET_ENTITY_LOCATIONS_LIST_REQUEST:
            return SetEntityLocationsListRequestReducer(state, action);
        case SET_ENTITY_LOCATIONS:
            return SetEntityLocationsReducer(state, action);
        case SET_IS_LOADING:
            return SetIsLoadingReducer(state, action);
        case LIST_COUNT:
            return SetListCountReducer(state, action);
        case COUNTRY_LIST:
            return SetCountriesListReducer(state, action);
        case EDIT_ENTITY_LOCATIONS:
            return SetEditEntityLocationsReducer(state, action);
        case SET_OTHER_IMAGES:
            return SetCreateOtherImagesReducer(state, action);
        case SET_CONTACT_LIST:
            return SetContactListReducer(state, action);
        case SET_REFRESH:
            return SetRefreshReducer(state, action);
        case SET_DEPARTMENTS:
            return SetDepartmentListReducer(state, action);
        case SET_TEAMS:
            return SetTeamListReducer(state, action);
        case SET_OPTION_SERVICE:
            return SetOptionServicesReducer(state, action);
        case SET_CREATE_OPTION_SERVICE:
            return SetCreateOptionSeriveReducer(state, action);
        case SET_SERVICES:
            return SetServicesReducer(state, action);
        default:
            return state;
    }
}

const context = ContextCreater(
    EntityLocationReducer,
    entityLocationActions,
    initialEntityLocationState
);
const EntityLocationContext: Context<IEntityLocationContext> = context.Context;
const EntityLocationProvider = context.Provider;

export { EntityLocationProvider, EntityLocationContext }