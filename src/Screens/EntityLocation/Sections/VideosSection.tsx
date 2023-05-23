import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import AddVideos from "../Component/Videos/Videos";
import CreateAddVideos from "../Component/Videos/CreateVideos";
import EditAddVideos from "../Component/Videos/EditVideos";
import Paper from "../../../Components/Paper/Paper";


const VideosSection = () => {

    const { SetIsLoading, state: { isLoading } } = useContext(EntityLocationContext);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    const navigate = useNavigate();
    let entityId = GetParams("EntityId");


    useEffect(() => {
        //    SetIsLoading(true);
        return () => {
            SetIsLoading(false);
        };
    }, [])

    const SubmitEntityLocation = async () => {
        // createAddressDetails.entityId = Number(entityId);
        // await postEntityLocation(createAddressDetails).then((res) => {
        //     navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${entityId}&EntityLocationId=${res.data.id}`)
        // })
    }

    const handleAdd = () => {
        setCreate(true);
    }

    const actions = () => {
        return (
            <Box>
                <Button variant="contained" label="Submit" onClick={SubmitEntityLocation} />
            </Box>
        )
    }

    const listButtons = () => {
        return (
            <Grid container justifyContent={"flex-end"}>
                <Grid item xs={12} sm={12} md={6} style={{ textAlign: "end" }}>
                    <Button onClick={handleAdd} label={"New Video"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }
    return (
        <>
            <Loader isActive={isLoading} />
            {create ?
                <Card title="Create Videos" actions={actions}>
                    <CreateAddVideos />
                </Card>
                :
                edit ?
                    <Card title="Edit Videos" actions={actions}>
                        <EditAddVideos />
                    </Card>
                    :
                    <Paper
                        title={"Videos List"}
                        subTitle="This table shows the Videos list"
                        buttonComponent={listButtons} >
                        <AddVideos />
                    </Paper>
            }
        </>
    )
}
export default VideosSection;