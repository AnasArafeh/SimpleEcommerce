import { Grid, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import ArticleIcon from '@mui/icons-material/Article';
import { EntityLocationContext } from '../../StateManagement/Reducers/EntityLocationReducer';
import DataTable from '../../../../Components/DataTable/DataTable';
import DataTablePagination from '../../../../Components/DataTablePagination/DataTablePagination';
import DataTableSearch from '../../../../Components/DataTableSearch/DataTableSearch';
import Select from '../../../../Components/Select/Select';
import TableButton from '../../../../Components/TableButton/TableButton';
import { IEntityLocation } from '../../../../Models/IEntityLocation';
import { ApplicationRoutes } from '../../../../Store/ApplicationRoutes';
import { IS_COMPLETE } from '../../StateManagement/Interfaces/IEntityLocationAction';
import { entityLocationsColumns } from '../../Store/EntityLocationsList';
import TableOperations from '../../../../Components/TableOperations/TableOperations';


const EntityLocationsList = () => {

    const { SetEntityLocationsListRequest, state: { entityLocationsCount, entityLocations,
        isLoading, entityLocationsListRequest } } = useContext(EntityLocationContext);
    const navigate = useNavigate();

    const handleEdit = (row: IEntityLocation) => {
        navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${row.entityId}&EntityLocationId=${row.id}`);
    }
    const handleViewOptions = (row: IEntityLocation) => {
        navigate(`${ApplicationRoutes().Options.route}?EntityId=${row.entityId}&EntityLocationId=${row.id}`);
    }

    const handleDelete = (row: IEntityLocation) => {
        // ConfirmationDialog(refresh, SetRefresh, row.id, deleteContract, "Delete", true);
    }


    const rowActions = (row: IEntityLocation) => {
        return (
            <Grid container justifyContent={"center"}>
                <Grid item xs={4} sm={4} md={4} lg={2.5}>
                    <TableButton onClick={() => handleEdit(row)} title="Edit"><EditIcon /></TableButton>
                </Grid>
                <Grid item xs={3} sm={4} md={4} lg={2.5}>
                    <TableButton onClick={() => handleViewOptions(row)} title="Resources"><ArticleIcon /></TableButton>
                </Grid>

            </Grid>
        )
    }

    const searchComponent = () => {
        return (
            <DataTableSearch setSearchText={SetEntityLocationsListRequest} />
        )
    }

    const paginationComponent = () => {
        return (
            <DataTablePagination
                currentPage={entityLocationsListRequest.currentPage}
                rowsPerPage={entityLocationsListRequest.rowsPerPage}
                count={entityLocationsCount}
                handleChangePage={SetEntityLocationsListRequest}
                handleChangeRowsPerPage={SetEntityLocationsListRequest}
            />
        )
    }


    const filterComponent = () => {
        return (
            <Grid container>
                <Grid item xs={12} sm={5} md={4} pr={2}>
                    <Select
                        id="is-complete-id"
                        value={entityLocationsListRequest.isComplete}
                        name="isComplete"
                        onChange={(e) => SetEntityLocationsListRequest(IS_COMPLETE, e.target.value)}
                        label="Completed"
                    >
                        <MenuItem key={"none-sub"} value={"none"}>Any</MenuItem>
                        <MenuItem key={"isActive-true"} value={"true"}>true</MenuItem>
                        <MenuItem key={"isActive-false"} value={"false"}>false</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        )
    }
    return (
        <Grid container>
            <Grid item xs={12} lg={12}>
                <TableOperations
                    searchComponent={searchComponent}
                    paginationComponent={paginationComponent}
                    filterComponent={filterComponent}
                >
                    <DataTable
                        rows={entityLocations}
                        columns={entityLocationsColumns}
                        isLoading={isLoading}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
        </Grid>
    )

}


export default EntityLocationsList;