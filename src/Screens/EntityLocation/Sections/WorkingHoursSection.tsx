import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import OtherImages from "../Component/OtherImages/OtherImages";
import { saveWorkingDays } from "../Services/EntityLocation";
import { baseAlert } from "../../../Helpers/AlertHelper";
import { getEntityLocationWorkingDays } from "../../../Services/EntityLocation";
import { IWorkingDays } from "../Models/IWorkingHoursModel";
import WorkingHours from "../Component/WorkingHours/WorkingHours";
import CreateWorkingHours from "../Component/WorkingHours/CreateWorkingHours";
import EditWorkingHours from "../Component/WorkingHours/EditWorkingHours";
import Paper from "../../../Components/Paper/Paper";


const WorkingHoursSection = () => {

    const { SetIsLoading, SetAddOpeningHours, state: { isLoading, addOpeningHours } } = useContext(EntityLocationContext);
    const navigate = useNavigate();
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    let entityLocationId = GetParams("EntityLocationId");

    useEffect(() => {
        SetIsLoading(true);
        getWorkingHours();

        return () => {
            SetIsLoading(false);
        };
    }, [])

    const getWorkingHours = async () => {
        await getEntityLocationWorkingDays(entityLocationId!).then((result) => {
            result.data.result.forEach((res: IWorkingDays) => {
                addOpeningHours.find(open => open.dayOfWeek === res.dayOfWeek)!.workingHours = res.workingHours
            })
            SetAddOpeningHours([...addOpeningHours])
        }).finally(() => SetIsLoading(false));
    }

    const handleAdd = () => {
        setCreate(true);
    }
    const UpdateWorkingDays = async () => {
        await saveWorkingDays(addOpeningHours, entityLocationId!).then((res) => {
            baseAlert("Working Hours updated successfully", undefined, "success").then(() => {
                //  navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${res.data.result.entityId}`)
            })
        })
    }
    const actions = () => {
        return (
            <Box>
                <Button variant="contained" label="Submit" onClick={UpdateWorkingDays} />
            </Box>
        )
    }
    const listButtons = () => {
        return (
            <Grid container justifyContent={"flex-end"}>
                <Grid item xs={12} sm={12} md={6} style={{ textAlign: "end" }}>
                    <Button onClick={handleAdd} label={"New Working Hours"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            {create ?
                <Card title="Create Working Hours" actions={actions}>
                    <CreateWorkingHours />
                </Card>
                :
                edit ?
                    <Card title="Working Hours" actions={actions}>
                        <EditWorkingHours />
                    </Card>
                    :
                    <Paper
                        title={"Working Hours List"}
                        subTitle="This table shows the Working Hours list"
                        buttonComponent={listButtons} >
                        <WorkingHours />
                    </Paper>
            }
        </>
    )
}
export default WorkingHoursSection;