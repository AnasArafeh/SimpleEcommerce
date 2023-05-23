import { ICategoryList } from "../../../../Models/IEntity";
import { IEntityLocation } from "../../../../Models/IEntityLocation";
import { ICreateOwnerDetails } from "../../../Resource/Models/IOwnerDetailsModel";
import { ICreateEntityLocationService, IService } from "../../Models/IServicesModel";
import { ICreateAddressDetails } from "../../Models/ICreateAddressDetailsModel";
import { IAddVideos } from "../../Models/IAddVideosModel";
import { IWorkingDays } from "../../Models/IWorkingHoursModel";
import { IOtherImages } from "../../Models/IOtherImages";
import { ICreateTeam, IEditTeam, ITeamList } from "../../Models/ITeamsModel";
import {
    SET_CREATE_ADDRESS_DETAILS, SET_CREATE_TEAM_DETAILS, SET_CREATE_OWNER_DETAILS, SET_ADD_VIDEOS_DETAILS,
    SET_ADD_OPENING_HOURS, IEntityLocationAction, SET_ENTITY_LOCATIONS_LIST_REQUEST, SET_ENTITY_LOCATIONS, SET_IS_LOADING,
    LIST_COUNT, COUNTRY_LIST, EDIT_ENTITY_LOCATIONS, SET_OTHER_IMAGES, SET_CONTACT_LIST, SET_SERVICES,
    SET_CREATE_CONTACT, SET_REFRESH, SET_DEPARTMENTS, SET_TEAMS, SET_CREATE_OPTION_SERVICE, SET_OPTION_SERVICE, SET_EDIT_CONTACT, SET_EDIT_TEAM
} from "../Interfaces/IEntityLocationAction";
import { IContactInfo, IContactList, IEditContactInfo } from "../../Models/IContactDetailsModel";
import { IDepartmentList } from "../../Models/IDepartmentsModel";
import { IEditAddressDetials } from "../../Models/IEditAddressDetailsModel";


const SetCreateAddressDetails = dispatch => (data: ICreateAddressDetails): IEntityLocationAction => dispatch({
    type: SET_CREATE_ADDRESS_DETAILS,
    payload: data
});

const SetCreateTeamDetails = dispatch => (data: ICreateTeam): IEntityLocationAction => dispatch({
    type: SET_CREATE_TEAM_DETAILS,
    payload: data
});

const SetCreateOwnerDetails = dispatch => (data: ICreateOwnerDetails): IEntityLocationAction => dispatch({
    type: SET_CREATE_OWNER_DETAILS,
    payload: data
});

const SetAddVideosDetails = dispatch => (data: IAddVideos): IEntityLocationAction => dispatch({
    type: SET_ADD_VIDEOS_DETAILS,
    payload: data
});

const SetAddOpeningHours = dispatch => (data: IWorkingDays[]): IEntityLocationAction => dispatch({
    type: SET_ADD_OPENING_HOURS,
    payload: data
});

const SetEntityLocationsListRequest = dispatch => (name: string, data: number | string): IEntityLocationAction => dispatch({
    type: SET_ENTITY_LOCATIONS_LIST_REQUEST,
    payload: {
        name: name,
        value: data
    }
});

const SetCreateOtherImages = dispatch => (data: IOtherImages): IEntityLocationAction => dispatch({
    type: SET_OTHER_IMAGES,
    payload: data
});

const SetContactList = dispatch => (data: IContactList): IEntityLocationAction => dispatch({
    type: SET_CONTACT_LIST,
    payload: {
        value: data
    }
});

const SetEntityLocations = dispatch => (data: IEntityLocation): IEntityLocationAction => dispatch({
    type: SET_ENTITY_LOCATIONS,
    payload: data
});

const SetCreateContactDetails = dispatch => (data: IContactInfo): IEntityLocationAction => dispatch({
    type: SET_CREATE_CONTACT,
    payload: data
});

const SetEditContactDetails = dispatch => (data: IEditContactInfo): IEntityLocationAction => dispatch({
    type: SET_EDIT_CONTACT,
    payload: data
});

const SetEditTeamDetails = dispatch => (data: IEditTeam): IEntityLocationAction => dispatch({
    type: SET_EDIT_TEAM,
    payload: data
});

const SetIsLoading = dispatch => (data: boolean): IEntityLocationAction => dispatch({
    type: SET_IS_LOADING,
    payload: data
});

const SetCountriesList = dispatch => (data: ICategoryList): IEntityLocationAction => dispatch({
    type: COUNTRY_LIST,
    payload: {
        value: data
    }
})

const SetListCount = dispatch => (name: string, data: number | string): IEntityLocationAction => dispatch({
    type: LIST_COUNT,
    payload: {
        name: name,
        value: data
    }
});

const SetEditAddressDetails = dispatch => (data: IEditAddressDetials): IEntityLocationAction => dispatch({
    type: EDIT_ENTITY_LOCATIONS,
    payload: data
})

const SetRefresh = dispatch => (data: boolean): IEntityLocationAction => dispatch({
    type: SET_REFRESH,
    payload: data
});

const SetDepartmentsList = dispatch => (data: IDepartmentList): IEntityLocationAction => dispatch({
    type: SET_DEPARTMENTS,
    payload: {
        value: data
    }
});

const SetTeamsList = dispatch => (data: ITeamList): IEntityLocationAction => dispatch({
    type: SET_TEAMS,
    payload: {
        value: data
    }
});

const SetEntityLocationServices = dispatch => (data: ICreateEntityLocationService): IEntityLocationAction => dispatch({
    type: SET_CREATE_OPTION_SERVICE,
    payload: data
});

const SetOptionServicesList = dispatch => (data: IService): IEntityLocationAction => dispatch({
    type: SET_OPTION_SERVICE,
    payload: {
        value: data
    }
});

const SetServicesList = dispatch => (data: IService): IEntityLocationAction => dispatch({
    type: SET_SERVICES,
    payload: {
        value: data
    }
});



export const entityLocationActions = {
    SetCreateAddressDetails,
    SetCreateTeamDetails,
    SetCreateOwnerDetails,
    SetAddVideosDetails,
    SetAddOpeningHours,
    SetEntityLocationsListRequest,
    SetEntityLocations,
    SetIsLoading,
    SetListCount,
    SetCountriesList,
    SetEditAddressDetails,
    SetCreateOtherImages,
    SetContactList,
    SetCreateContactDetails,
    SetRefresh,
    SetDepartmentsList,
    SetTeamsList,
    SetEntityLocationServices,
    SetOptionServicesList,
    SetServicesList,
    SetEditContactDetails,
    SetEditTeamDetails
}