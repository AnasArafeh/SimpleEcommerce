import { IEntityLocation } from "../../../Models/IEntityLocation";
import { IFormattedColumn, IColumnsFormat } from "../../../Models/IShared";

export interface IEntityLocationTab {
        label: string,
        value: string,
        component: JSX.Element,
        title: string
}

export interface IEntityLocationColumnsFormat<T> extends Omit<IColumnsFormat<T>, 'refresh' | 'setRefresh' | 'rows' | 'setState'> {}

export interface IEntityLocationColumns extends Omit<IFormattedColumn, 'format'> {
    format?: ({ row }: IEntityLocationColumnsFormat<IEntityLocation>) => any;
} 