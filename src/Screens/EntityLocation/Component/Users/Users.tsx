import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from "react";
import DataTable from "../../../../Components/DataTable/DataTable";
import Button from "../../../../Components/Button/Button";
import Select from "../../../../Components/Select/Select";
import TextField from "../../../../Components/TextField/TextField";
import TableButton from "../../../../Components/TableButton/TableButton";
import TableOperations from "../../../../Components/TableOperations/TableOperations";
import { IEntity } from "../../../../Models/IEntity";
import { OwnerTeamColumns } from "../../../Resource/Store/ownerTeamList";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import { OwnerCompletedInfoColumns } from "../../Store/Users";

const Users = () => {
    const [entities, setEntites]: any = useState()
    const { SetCreateOwnerDetails, state: { createOwnerDetails } } = useContext(EntityLocationContext);

    const handleOwnerDetailsChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        createOwnerDetails[name] = value;
        SetCreateOwnerDetails({ ...createOwnerDetails })
    }

    const rowActions = (row: IEntity) => {

        return (
            <Grid container justifyContent={"center"}>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { }} title="Edit"><EditIcon /></TableButton>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { }} title="Delete"><DeleteIcon /></TableButton>
                </Grid>
                {/* <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => handleDelete(row)} title="Delete"><DeleteIcon /></TableButton>
                </Grid> */}
            </Grid>
        )
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} mt={3}>
                <TableOperations>
                    <DataTable
                        rows={entities}
                        columns={OwnerCompletedInfoColumns}
                        isLoading={false}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
        </Grid>
    )
}

export default Users;