import { ICountryList, IEntityLocation, IEntityLocationsListRequest } from "../../../../Models/IEntityLocation";
import { IAction } from "../../../../StateManagement/Interfaces/IAction";
import { IWorkingDays } from "../../Models/IWorkingHoursModel";
import { ICreateOwnerDetails } from "../../../Resource/Models/IOwnerDetailsModel";
import { ICreateEntityLocationService, IOptionService, IService } from "../../Models/IServicesModel";
import { ICreateAddressDetails } from "../../Models/ICreateAddressDetailsModel";
import { IAddVideos } from "../../Models/IAddVideosModel";
import { ICreateTeam, IEditTeam, ITeamList } from "../../Models/ITeamsModel";
import { IOtherImages } from "../../Models/IOtherImages";
import { ILegalImages } from "../../../Entity/Models/ILegalImages";
import { IContactInfo, IContactList, IEditContactInfo } from "../../Models/IContactDetailsModel";
import { IDepartmentList } from "../../Models/IDepartmentsModel";
import { IEditAddressDetials } from "../../Models/IEditAddressDetailsModel";


export const SET_BUSINESS_INFO = "SET_BUSINESS_INFO";
export const SET_CREATE_BUSINESS_INFO = "SET_CREATE_BUSINESS_INFO";
export const SET_CREATE_ADDRESS_DETAILS = "SET_CREATE_ADDRESS_DETAILS";
export const SET_CREATE_TEAM_DETAILS = "SET_CREATE_TEAM_DETAILS";
export const SET_CREATE_OWNER_DETAILS = "SET_CREATE_OWNER_DETAILS";
export const SET_CREATE_OPTION_DETAILS = "SET_CREATE_OPTION_DETAILS";
export const SET_CREATE_SERVICE_OPTION_DETAILS = "SET_CREATE_SERVICE_OPTION_DETAILS";
export const SET_ADD_VIDEOS_DETAILS = "SET_ADD_VIDEOS_DETAILS";
export const SET_ADD_OPENING_HOURS = "SET_ADD_OPENING_HOURS";
export const SET_ENTITY_LOCATIONS_LIST_REQUEST = "SET_ENTITY_LOCATIONS_LIST_REQUEST";
export const SET_ENTITY_LOCATIONS = "SET_ENTITY_LOCATIONS";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const LIST_COUNT = "LIST_COUNT";
export const ENTITY_LOCATIONS_COUNT = "entityLocationsCount";
export const IS_COMPLETE = "isComplete";
export const COUNTRY_LIST = "COUNTRY_LIST";
export const EDIT_ENTITY_LOCATIONS = "EDIT_ENTITY_LOCATIONS";
export const SET_OTHER_IMAGES = "SET_OTHER_IMAGES";
export const SET_CONTACT_LIST = "SET_CONTACT_LIST";
export const SET_CREATE_CONTACT = "SET_CREATE_CONTACT";
export const SET_EDIT_CONTACT = "SET_EDIT_CONTACT";
export const SET_REFRESH ="SET_REFRESH";
export const SET_DEPARTMENTS = "SET_DEPARTMENTS";
export const SET_TEAMS ="SET_TEAMS";
export const SET_OPTION_SERVICE = "SET_OPTION_SERVICE";
export const SET_CREATE_OPTION_SERVICE = "SET_CREATE_OPTION_SERVICE";
export const SET_SERVICES = "SET_SERVICES";
export const SET_EDIT_TEAM = "SET_EDIT_TEAM";

export interface IEntityLocationContext extends IEntityLocationActions {

    state: IEntityLocationState
}
export interface IEntityLocationActions {
    SetCreateAddressDetails: (data: ICreateAddressDetails) => IEntityLocationAction,
    SetCreateTeamDetails: (data: ICreateTeam) => IEntityLocationAction,
    SetEditTeamDetails: (data: IEditTeam) => IEntityLocationAction,
    SetCreateOwnerDetails: (data: ICreateOwnerDetails) => IEntityLocationAction,
    SetCreateOptionServiceDetails: (data: IOptionService) => IEntityLocationAction,
    SetAddVideosDetails: (data: IAddVideos) => IEntityLocationAction,
    SetAddOpeningHours: (data: IWorkingDays[]) => IEntityLocationAction,
    SetEntityLocationsListRequest: (name: string, data: number | string) => IEntityLocationAction,
    SetEntityLocations: (data: IEntityLocation[]) => IEntityLocationAction,
    SetIsLoading: (data: boolean) => IEntityLocationAction,
    SetListCount: (name: string, data: number | string) => IEntityLocationAction,
    SetCountriesList: (data: ICountryList) => IEntityLocationAction,
    SetEditAddressDetails: (data: IEditAddressDetials) => IEntityLocationAction,
    SetCreateOtherImages: (data: IOtherImages) => IEntityLocationAction,
    SetContactList: (data: IContactList[]) => IEntityLocationAction,
    SetCreateContactDetails: (data: IContactInfo) => IEntityLocationAction
    SetEditContactDetails: (data: IEditContactInfo) => IEntityLocationAction
    SetRefresh: (data: boolean) => IEntityLocationAction,
    SetDepartmentsList: (data: IDepartmentList[]) =>IEntityLocationAction,
    SetTeamsList: (data: ITeamList[])  =>IEntityLocationAction,
    SetOptionServicesList: (data: IOptionService[]) => IEntityLocationAction,
    SetEntityLocationServices: (data : ICreateEntityLocationService) => IEntityLocationAction,
    SetServicesList: (data: IService[]) =>IEntityLocationAction,
}
export interface IEntityLocationState {
    createAddressDetails: ICreateAddressDetails,
    createTeamDetails: ICreateTeam,
    createOwnerDetails: ICreateOwnerDetails,
    addVideosDetails: IAddVideos,
    addOpeningHours: IWorkingDays[],
    entityLocations: IEntityLocation[],
    entityLocationsListRequest: IEntityLocationsListRequest,
    entityLocationsCount: number,
    isLoading: boolean,
    countryList: ICountryList[],
    editAddressDetails: IEditAddressDetials,
    createOtherImages: IOtherImages,
    contactList: IContactList[],
    createContactDetails: IContactInfo,
    editContactDetails: IEditContactInfo,
    editTeamDetails: IEditTeam,
    refresh : boolean,
    departmentsList : IDepartmentList[],
    teamsList: ITeamList[]
    optionServiceList:IOptionService[],
    entityLocationServices : ICreateEntityLocationService,
    serviceList : IService[],
}
export interface IEntityLocationAction extends IAction {
    payload: any
}