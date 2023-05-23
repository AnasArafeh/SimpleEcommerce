import { AxiosResponse } from "axios";

export interface IConfirmationDialog {
    refresh: boolean,
    setRefresh: (data: boolean) => any,
    id: number,
    request: (id: number) => Promise<AxiosResponse<any, any>>,
    text: string,
    isDelete: boolean
}
