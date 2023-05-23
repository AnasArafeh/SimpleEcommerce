
import { CircularProgress, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter, stringHasNoValue } from '../../Helpers/StringHelper';
import { IDataTable } from './Models/IDataTable';
import './Styles/DataTable.scss'

const DataTable = ({ columns, rows, isLoading = false, hasSorting = false, actionsComponent, refresh, setRefresh, setState }: IDataTable) => {


    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {!!columns && columns.map((column, columnIndex) => (
                            <TableCell
                                key={`${columnIndex}-${column.id}`}
                                align={column.align}
                                style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                            >
                                capitalizeFirstLetter(column.label)
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <>
                        {isLoading &&
                            <TableRow hover tabIndex={-1} key="isLoadingRow">
                                <TableCell key="isLoading" className='DataTableLoaderCell'>
                                    <Box className='DataTableLoader'>
                                        <CircularProgress />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        }
                        {!!rows && rows?.length === 0 ?
                            <TableRow hover role="checkbox" tabIndex={-1} key="notFoundRow">
                                <TableCell align="center" key="notFound" className='DataTableNoResultCell'>
                                    <Typography>
                                        No results found..
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            :
                            !!rows && rows.map((row, rowIndex) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={`${column.id}-${rowIndex}-${column.label}}`} align={column.rowAlign ?? column.align}>
                                                    <>
                                                        {column.id === "actions"
                                                            ?
                                                            (!!actionsComponent && actionsComponent(row))
                                                            : column.format
                                                                ? stringHasNoValue(column.format({ row, refresh, setRefresh, rows, setState }))
                                                                : stringHasNoValue(String(value))}
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
    );
}

export default DataTable;