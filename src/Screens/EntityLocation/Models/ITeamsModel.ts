import { IFormattedColumn, IColumnsFormat } from "../../../Models/IShared";

export interface ITeamColumnsFormat<T> extends Omit<IColumnsFormat<T>, 'rows' | 'setState' | 'refresh' | 'setRefresh'> { }

export interface ITeamColumns extends Omit<IFormattedColumn, 'format'> {
    format?: ({ row }: ITeamColumnsFormat<ITeamList>) => any;
}

export interface ICreateTeam {
    departmentId: number | null,
    entityLocationId: number
    details: ICreateTeamDetails[]
}

export interface ICreateTeamDetails {
    entityLocationTeamId: number,
    entityLocationTeamName: string,
    localeId: number
}

export interface IEditTeam extends ICreateTeam {
    id: number | null
}

export interface ITeamList extends ICreateTeam {
    id: number | null
    isDeleted: boolean
}