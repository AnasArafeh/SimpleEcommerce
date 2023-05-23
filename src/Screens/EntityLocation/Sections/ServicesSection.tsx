import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { getEntityLocationServices, getOptionServices, getServices } from "../../../Services/EntityLocation";
import EntityLocationServices from "../Component/Services/Services";
import { CreateLocationService } from "../Services/EntityLocation";
import SuccessDialog from "../../../Components/SuccessDialog/SuccessDialog";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import EditEntityLocationServices from "../Component/Services/EditServices";
import CreateEntityLocationServices from "../Component/Services/CreateServices";
import Paper from "../../../Components/Paper/Paper";


const ServicesSection = () => {

    const { SetIsLoading, SetServicesList, SetOptionServicesList, SetRefresh, state: { isLoading, refresh, entityLocationServices } } = useContext(EntityLocationContext);
    const navigate = useNavigate();
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    let entityId = GetParams("EntityId");
    let entityLocationId = GetParams("EntityLocationId");

    useEffect(() => {
        SetIsLoading(true);
        getServicesList();
        getEntityServicesList();
        return () => {
            SetIsLoading(false);
        };
    }, [])

    useEffect(() => {
        SetIsLoading(true);
        getOptionServicesList();
    }, [refresh])

    const handleAdd = () => {
        setCreate(true);
    }

    const getOptionServicesList = async () => {
        await getOptionServices(entityLocationId!).then((result: any) => {
            SetOptionServicesList(result.data.result);
        }).finally(() => SetIsLoading(false));
    }

    const getServicesList = async () => {
        await getServices(entityLocationId!).then((result) => {
            SetServicesList(result.data.result)
        }).finally(() => SetIsLoading(false));;
    }

    const getEntityServicesList = async () => {
        await getEntityLocationServices(entityLocationId!).then((result) => {
            SetOptionServicesList(result.data.result);
        }).finally(() => SetIsLoading(false));
    }

    const handleAddService = async () => {
        entityLocationServices.entityLocationId = Number(entityLocationId);
        await CreateLocationService(entityLocationServices).then(async (res) => {
            SuccessDialog({ title: 'Team created successfully', confirmButtonText: "Ok", showConfirmButton: true, icon: "success" }).then(async (result) => {
                if (result.isConfirmed) {
                    SetRefresh(!refresh);
                }
                else if (result.isDenied) {
                    navigate(`${ApplicationRoutes().EntityLocation.route}`)
                }
                else {
                    navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${entityId}`)
                }
            })
        });
    }

    const actions = () => {
        return (
            <Box>
                <Button variant="contained" label="Submit" onClick={handleAddService} />
            </Box>
        )
    }

    const listButtons = () => {
        return (
            <Grid container justifyContent={"flex-end"}>
                <Grid item xs={12} sm={12} md={6} style={{ textAlign: "end" }}>
                    <Button onClick={handleAdd} label={"New Service"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            {create ?
                <Card title="Create Services" actions={actions}>
                    <CreateEntityLocationServices />
                </Card>
                :
                edit ?
                    <Card title="Edit Services" actions={actions}>
                        <EditEntityLocationServices />
                    </Card>
                    :
                    <Paper
                        title={"Services List"}
                        subTitle="This table shows the services list"
                        buttonComponent={listButtons} >
                        <EntityLocationServices />
                    </Paper>
            }
        </>
    )
}
export default ServicesSection;