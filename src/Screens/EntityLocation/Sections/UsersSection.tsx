import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import Users from "../Component/Users/Users";
import EditUsers from "../Component/Users/EditUsers";
import Paper from "../../../Components/Paper/Paper";
import CreateUsers from "../Component/Users/CreateUsers";


const UsersSection = () => {

    const { SetIsLoading, state: { isLoading } } = useContext(EntityLocationContext);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(() => {

        //  SetIsLoading(true);

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
                    <Button onClick={handleAdd} label={"New User"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            {create ?
                <Card title="Create User" actions={actions}>
                    <CreateUsers />
                </Card>
                :
                edit ?
                    <Card title="Edit User" actions={actions}>
                        <EditUsers />
                    </Card>
                    :
                    <Paper
                        title={"Users List"}
                        subTitle="This table shows the Users list"
                        buttonComponent={listButtons}>
                        <Users />
                    </Paper>
            }
        </>
    )
}
export default UsersSection;