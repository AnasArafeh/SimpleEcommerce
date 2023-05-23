import HttpServices from '../../../Services/BaseAPI';
import { IWorkingDays } from '../Models/IWorkingHoursModel';
import { ICreateAddressDetails } from '../Models/ICreateAddressDetailsModel';
import { IContactInfo, IEditContactInfo } from '../Models/IContactDetailsModel';
import { ICreateTeam, IEditTeam } from '../Models/ITeamsModel';
import { ICreateEntityLocationService } from '../Models/IServicesModel';
import { IEditAddressDetials } from '../Models/IEditAddressDetailsModel';

export async function uploadEntityLocationImage(file: any) {
    return await HttpServices.post(`/EntityManagement/EntityLocation/UploadImage`, file, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
export async function postEntityLocation(createEntityLocation: ICreateAddressDetails) {
    return await HttpServices.post(`/EntityManagement/EntityLocation/Create`, createEntityLocation,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
}

export async function postEntityLocationService(createEntityLocatioService: ICreateEntityLocationService) {
    return await HttpServices.post(`/EntityManagement/Service/Create`, createEntityLocatioService,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
}

export async function EditEntityLocation(EditEntityLocation: IEditAddressDetials) {
    return await HttpServices.put(`/EntityManagement/EntityLocation/Update`, EditEntityLocation,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
}

export async function CreateContact(contact: IContactInfo) {
    return await HttpServices.post(`/EntityManagement/Contact/Create`, contact)
}

export async function UpdateContact(contact: IEditContactInfo) {
    return await HttpServices.put(`/EntityManagement/Contact/Update`, contact)
}

export async function DeleteContact(id: number) {
    return await HttpServices.delete(`/EntityManagement/Contact/Delete?id=${id}`)
}

export async function CreateTeam(team: ICreateTeam) {
    return await HttpServices.post(`/EntityManagement/EntityLocationTeam/Create`, team)
}

export async function UpdateTeam(team: IEditTeam) {
    return await HttpServices.put(`/EntityManagement/EntityLocationTeam/Update`, team)
}

export async function CreateLocationService(team: ICreateEntityLocationService) {
    return await HttpServices.post(`/EntityManagement/Service/Create`, team,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
}

export async function saveWorkingDays(workingDays: IWorkingDays[], entityLocationId: string) {
    return await HttpServices.put(`/EntityManagement/EntityLocation/SaveWorkingDays`, { entityLocationId, workingDays });
}