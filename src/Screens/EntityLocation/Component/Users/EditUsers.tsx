import { Grid, Divider, Box } from "@mui/material";
import { useState, useContext } from "react";
import DataTable from "../../../../Components/DataTable/DataTable";
import Button from "../../../../Components/Button/Button";
import Select from "../../../../Components/Select/Select";
import TextField from "../../../../Components/TextField/TextField";
import TableButton from "../../../../Components/TableButton/TableButton";
import TableOperations from "../../../../Components/TableOperations/TableOperations";
import { IEntity } from "../../../../Models/IEntity";
import { OwnerTeamColumns } from "../../../Resource/Store/ownerTeamList";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EditUsers = () => {
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
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={createOwnerDetails.firstName}
                    onChange={handleOwnerDetailsChange}
                    placeholder="First Name"
                    required

                />
            </Grid>

            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <TextField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={createOwnerDetails.lastName}
                    onChange={handleOwnerDetailsChange}
                    placeholder="Last Name"
                    required

                />
            </Grid>

            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="phone"
                    label="Phone"
                    type="text"
                    name="phone"
                    value={createOwnerDetails.phone}
                    onChange={handleOwnerDetailsChange}
                    placeholder="Phone"
                    required

                />
            </Grid>

            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="email"
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={createOwnerDetails.email}
                    onChange={handleOwnerDetailsChange}
                    required

                />
            </Grid>
            <Grid item xs={12} lg={12} mt={4} mb={2}>

                <Divider className="divider" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <Select
                    id="Team"
                    value={createOwnerDetails.team}
                    name="team"
                    onChange={handleOwnerDetailsChange}
                    label="team"
                    required
                    isValid={true}
                >
                    {/* <MenuItem key={"none-sub"} value={0}>None</MenuItem>
                        {subscriptionLevels.map(level => {
                            return (
                                <MenuItem key={level.id} value={level.id}>{level.description}</MenuItem>
                            )
                        })} */}
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <Select
                    id="role"
                    value={createOwnerDetails.role}
                    name="role"
                    onChange={handleOwnerDetailsChange}
                    label="Role"
                    required
                    isValid={true}
                >
                    {/* <MenuItem key={"none-sub"} value={0}>None</MenuItem>
                        {subscriptionLevels.map(level => {
                            return (
                                <MenuItem key={level.id} value={level.id}>{level.description}</MenuItem>
                            )
                        })} */}
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Box sx={{ justifyContent: "flex-end" }}>
                        <Button variant="contained" label="Add Team Role" disabled={false} onClick={() => { }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid>
                <TableOperations>
                    <DataTable
                        rows={entities}
                        columns={OwnerTeamColumns}
                        isLoading={false}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
            <Grid item xs={12} lg={12} mt={2} mb={2}>

                <Divider className="divider" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Box sx={{ justifyContent: "flex-end" }}>
                        <Button variant="contained" label="Add Owner" disabled={false} onClick={() => { }} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EditUsers