export interface IDataTable {
    columns: any[],
    rows: any[],
    isLoading: boolean,
    hasSorting?: boolean,
    actionsComponent?: (value: any) => any,
    refresh?: boolean,
    setRefresh?: (data: boolean) => any
    setState?: (data: any) => void
}