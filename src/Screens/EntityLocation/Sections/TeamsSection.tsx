import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { getTeamById, getTeams } from "../../../Services/EntityLocation";
import { getDepartmentList } from "../../../Services/Entity";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import { CreateTeam, UpdateTeam } from "../Services/EntityLocation";
import SuccessDialog from "../../../Components/SuccessDialog/SuccessDialog";
import Teams from "../Component/Teams/Teams";
import EditTeams from "../Component/Teams/EditTeams";
import CreateTeams from "../Component/Teams/CreateTeams";
import Paper from "../../../Components/Paper/Paper";

const TeamsSection = () => {

    const { SetIsLoading, SetTeamsList, SetRefresh, SetEditTeamDetails, SetDepartmentsList, state: { isLoading, refresh, createTeamDetails, editTeamDetails } } = useContext(EntityLocationContext);
    const navigate = useNavigate();

    let entityId = GetParams("EntityId");
    let entityLocationId = GetParams("EntityLocationId");

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        SetIsLoading(true);
        GetDepartments();
        return () => {
            SetIsLoading(false);
        };
    }, [])

    useEffect(() => {
        SetIsLoading(true);
        GetTeamsList();
    }, [refresh])

    useEffect(() => {
        if (editTeamDetails.id !== null) {
            GetTeamById();
            setEdit(true);
        }
    }, [editTeamDetails.id])

    const handleAdd = () => {
        setCreate(true);
    }

    const GetTeamById = async () => {
        await getTeamById(editTeamDetails.id!).then((result: any) => {
            SetEditTeamDetails(result.data.result)
        }).finally(() => SetIsLoading(false));
    }

    const GetTeamsList = async () => {
        await getTeams(entityLocationId!).then((result: any) => {
            SetTeamsList(result.data.result);
        }).finally(() => SetIsLoading(false));
    }

    const GetDepartments = async () => {
        await getDepartmentList(entityId!).then((result: any) => {
            SetDepartmentsList(result.data.result);
        }).finally(() => SetIsLoading(false));
    }

    const handleBackAction = () => {
        setCreate(false);
        setEdit(false);
    }

    const AddTeamDetails = async () => {
        createTeamDetails.entityLocationId = Number(entityLocationId);
        await CreateTeam(createTeamDetails).then(async (res) => {
            SuccessDialog({ title: 'Team created successfully', confirmButtonText: "Ok", showConfirmButton: true, icon: "success" }).then(async (result) => {
                if (result.isConfirmed) {
                    SetRefresh(!refresh);
                }
                else if (result.isDenied) {
                    SetRefresh(!refresh);
                    setCreate(false);
                }
                else {
                    navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${entityId}`)
                }
            })
        });
    }

    const UpdateTeamDetails = async () => {
        await UpdateTeam(editTeamDetails).then(async (res) => {
            SuccessDialog({
                title: 'Team updated successfully', confirmButtonText: 'Edit Team', denyButtonText: 'Team List',
                showDenyButton: true, showConfirmButton: true, icon: "success"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    SetRefresh(!refresh);
                }
                else if (result.isDenied) {
                    SetRefresh(!refresh);
                    setEdit(false);
                }
            })
        });
    }
    const createActions = () => {
        return (
            <>
                <Box>
                    <Grid container justifyContent={"space-between"} style={{ display: "flex" }}>
                        <Grid item>
                            <Button variant="contained" label="Back" onClick={(handleBackAction)} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" label="Submit" onClick={AddTeamDetails} />
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
    const editActions = () => {
        return (
            <>
                <Box>
                    <Grid container justifyContent={"space-between"} style={{ display: "flex" }}>
                        <Grid item>
                            <Button variant="contained" label="Back" onClick={(handleBackAction)} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" label="Submit" onClick={UpdateTeamDetails} />
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
    const listButtons = () => {
        return (
            <Grid container justifyContent={"flex-end"}>
                <Grid item xs={12} sm={12} md={6} style={{ textAlign: "end" }}>
                    <Button onClick={handleAdd} label={"New Team"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            {create ?
                <Card title="Create Team" actions={createActions}>
                    <CreateTeams />
                </Card>
                :
                edit ?
                    <Card title="Edit Team" actions={editActions}>
                        <EditTeams />
                    </Card>
                    :
                    <Paper
                        title={"Teams List"}
                        subTitle="This table shows the Teams list"
                        buttonComponent={listButtons}>
                        <Teams />
                    </Paper>
            }
        </>
    )
}
export default TeamsSection;