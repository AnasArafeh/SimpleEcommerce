
import { CircularProgress, Divider, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CloneObject } from '../../Helpers/ObjectHelper';
import { sortBy } from '../../Helpers/SortHelper';
import { usePagination } from '../../Hooks/usePagination';
import DataTableSearch from './DataTableSearch';
import { IListTable } from './Models/IListTable';
import "./Styles/DataTable.scss";

const DataTable: React.FC<any> = ({ columns, rows, title, subTitle, isLoading = false }: IListTable) => {

    const { currentPage, rowsPerPage, setCurrentPage, handleChangePage, handleChangeRowsPerPage } = usePagination();
    const [tableRows, setTableRows] = useState<any[]>([]);
    const [sortDirection, setSortDirection] = useState<string>("asc");
    const [selected, setSelected] = useState<string>("Country");

    useEffect(() => {
        if (!!rows && rows?.length > 0)
            setTableRows(CloneObject(rows));
    }, [rows])

    const handleSortBy = (id: any): any => {
        let result = sortBy(tableRows, id, sortDirection)
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        setTableRows(result);
        setSelected(id);
        setCurrentPage(0);
    }

    return (
        <Paper className="DataTableContainer">
            <Typography className='DataTabletitle'>
                {title}
            </Typography>
            <Typography className='DataTablesubTitle'>
                {subTitle}
            </Typography>
            <DataTableSearch rows={rows} setFilteredRows={setTableRows} setCurrentPage={setCurrentPage} />
            <Divider sx={{ height: 20 }} orientation="horizontal" />
            <TableContainer sx={{ maxHeight: 750 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {!!columns && columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    <TableSortLabel
                                        active={selected === column.id}
                                        direction={sortDirection === "desc" ? "desc" : "asc"}
                                        onClick={() => handleSortBy(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <>
                            {isLoading &&
                                <TableRow hover tabIndex={-1} key="isLoadingRow">
                                    <TableCell key="isLoading" className='DataTableloaderCell'>
                                        <Box className='DataTableloader'>
                                            <CircularProgress />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            }
                            {!!tableRows && tableRows?.length === 0 ?
                                <TableRow hover role="checkbox" tabIndex={-1} key="notFoundRow">
                                    <TableCell align="center" key="notFound" className='DataTablenoResultCell'>
                                        <Typography>
                                            No results found..
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                :
                                !!tableRows && tableRows.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <>
                                                                {column.format
                                                                    ? column.format(row)
                                                                    : value ?? "-"}
                                                            </>
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })
                            }
                        </>
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={tableRows?.length ?? 0}
                rowsPerPage={rowsPerPage}
                page={currentPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default DataTable;