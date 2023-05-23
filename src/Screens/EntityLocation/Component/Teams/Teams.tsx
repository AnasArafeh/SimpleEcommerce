import { Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import DataTable from "../../../../Components/DataTable/DataTable";
import TableButton from "../../../../Components/TableButton/TableButton";
import TableOperations from "../../../../Components/TableOperations/TableOperations";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import { teamsColumns } from "../../Store/Teams";
import ConfirmationDialog from "../../../../Components/ConfirmationDialog/ConfirmationDialog";
import { deleteTeam } from "../../../../Services/EntityLocation";
import { IEditTeam } from "../../Models/ITeamsModel";

const Teams = () => {
    const { SetRefresh, SetEditTeamDetails, state: { teamsList, refresh, editTeamDetails } } = useContext(EntityLocationContext);

    const handleDeleteTeam = async (row: any) => {
        ConfirmationDialog(refresh, SetRefresh, row.id, deleteTeam, "Delete", true);
    }

    const handleEditTeam = (id: number | null) => {
        SetEditTeamDetails({ ...editTeamDetails, id: id });
    }

    const rowActions = (row: IEditTeam) => {

        return (
            <Grid container justifyContent={"center"}>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { handleEditTeam(row.id) }} title="Edit"><EditIcon /></TableButton>
                    {/* , row.entityLocationId */}
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { handleDeleteTeam(row) }} title="Delete"><DeleteIcon /></TableButton>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid item xs={12} lg={12}>
                <TableOperations>
                    <DataTable
                        rows={teamsList}
                        columns={teamsColumns}
                        isLoading={false}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
        </Grid>
    )
}
export default Teams;