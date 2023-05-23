export interface IDataTablePagination {
    currentPage: number,
    rowsPerPage: number,
    count: number,
    handleChangePage: (name: string, value: number) => void,
    handleChangeRowsPerPage: (name: string, value: number) => void,
}