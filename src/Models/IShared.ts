export interface ISearchInfo {
    searchText: string
}

export interface IPagingInfo {
    rowsPerPage: number,
    currentPage: number
}

export interface IColumn {
    id: string;
    label: string;
    minWidth?: number;
    maxWidth?: number;
    align?: 'right' | "center" | "left";
    rowAlign?: "left";
}

export interface IColumnsFormat<T> {
    row: T,
    refresh: boolean,
    setRefresh: (data: boolean) => any,
    rows: T[],
    setState: (data: any) => any,
}

export interface IFormattedColumn extends IColumn {
    format?: ({ row, refresh, setRefresh, rows, setState }: IColumnsFormat<any>) => any;
}