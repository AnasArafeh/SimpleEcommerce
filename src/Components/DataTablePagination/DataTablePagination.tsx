import { TablePagination } from "@mui/material"
import { CURRENT_PAGE, ROWS_PER_PAGE } from "../../StateManagement/Interfaces/ISharedActions";
import { IDataTablePagination } from "./Models/IDataTablePagination";

const DataTablePagination = ({ count, rowsPerPage, currentPage, handleChangePage, handleChangeRowsPerPage }: IDataTablePagination) => {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25]}
            component="div"
            count={count ?? 0}
            rowsPerPage={rowsPerPage}
            page={currentPage}
            onPageChange={(e, page) => handleChangePage(CURRENT_PAGE, page)}
            onRowsPerPageChange={(e: any) => handleChangeRowsPerPage(ROWS_PER_PAGE, e.target.value)}
        />
    )
}


export default DataTablePagination;