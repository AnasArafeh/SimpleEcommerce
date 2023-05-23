import { IFormattedColumn, IColumnsFormat } from "../../../Models/IShared";

export interface IWorkingDays {
    dayName: string,
    dayOfWeek: number,
    workingHours: ITiming[],
}

export interface ITiming {
    workingHoursId: number,
    startTime: string,
    endTime: string,
    startHour: number,
    startMinute: number,
    endHour: number,
    endMinute: number,
    dayOfWeek: number
}

export interface IWorkingHoursColumnsFormat<T> extends Omit<IColumnsFormat<T>, 'refresh' | 'setRefresh'> {}

export interface IWorkingHoursColumns extends Omit<IFormattedColumn, 'format'> {
    format?: ({ row, rows, setState }: IWorkingHoursColumnsFormat<IWorkingDays>) => any;
}
