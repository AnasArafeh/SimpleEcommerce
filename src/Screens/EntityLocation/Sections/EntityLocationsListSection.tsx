import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Paper from "../../../Components/Paper/Paper";
import { GetParams } from "../../../Helpers/HttpHelper";
import { getEntityLocations } from "../../../Services/EntityLocation";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import EntityLocationsList from "../Component/EntityLocationsList/EntityLocationsList";
import { ENTITY_LOCATIONS_COUNT } from "../StateManagement/Interfaces/IEntityLocationAction";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";


const EntityLocationsListSection = () => {

    const { SetListCount, SetEntityLocations, SetIsLoading, state: { entityLocationsListRequest } } = useContext(EntityLocationContext);
    const navigate = useNavigate();
    let entityId = GetParams("EntityId");

    useEffect(() => {
        return () => {
            SetEntityLocations([]);
        };
    }, [])

    useEffect(() => {
        SetIsLoading(true);
        fetchEntityLocations();
    }, [entityLocationsListRequest]);

    const fetchEntityLocations = async () => {
        await getEntityLocations(entityId!, entityLocationsListRequest).then((result) => {
            SetEntityLocations(result.data.result);
            SetListCount(ENTITY_LOCATIONS_COUNT, result.data.totalItemCount)
        }).finally(() => SetIsLoading(false));
    }

    const handleNewEntityLocation = () => {
        navigate(`${ApplicationRoutes().CreateEntityLocation.route}?EntityId=${entityId}`);
    }

    const listButtons = () => {
        return (
            <Grid container justifyContent={"flex-end"}>
                <Grid item xs={12} sm={12} md={6} style={{ textAlign: "end" }}>
                    <Button onClick={handleNewEntityLocation} label={"New Location"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }

    return (
        <Paper
            title={"Entity Locations List"}
            subTitle="This table shows the entity locations list"
            buttonComponent={listButtons}
        >
            <EntityLocationsList />
        </Paper>
    );
}

export default EntityLocationsListSection;
