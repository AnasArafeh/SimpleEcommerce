import { Box, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import { getCountriesList, getEntityLocationDetails } from "../../../Services/EntityLocation";
import EditAddressDetails from "../Component/EditAddressDetails/EditAddressDetails";
import { EditEntityLocation } from "../Services/EntityLocation";
import { baseAlert } from "../../../Helpers/AlertHelper";
import { initialEditAddressDetails } from "../Store/EditAddressDetails";


const EditAddressDetailsSection = () => {

    const { SetEditAddressDetails, SetIsLoading, SetCountriesList, SetRefresh, state: { isLoading, editAddressDetails, refresh } } = useContext(EntityLocationContext);
    const navigate = useNavigate();

    let entityId = GetParams("EntityId");
    let entityLocationId = GetParams("EntityLocationId");

    useEffect(() => {

        SetIsLoading(true);
        GetCountries();
        getEntityLocationsDetails();
        return () => {
            SetEditAddressDetails(initialEditAddressDetails);
            SetIsLoading(false);
        };
    }, [refresh])

    const GetCountries = async () => {
        await getCountriesList().then((result) => {
            SetCountriesList(result.data.result);
        }).finally(() => SetIsLoading(false));
    }

    const getEntityLocationsDetails = async () => {
        await getEntityLocationDetails(entityLocationId!).then((result) => {
            SetEditAddressDetails(result.data.result)
        }).finally(() => SetIsLoading(false));;
    }

    const UpdateEntity = async () => {
        editAddressDetails.id = Number(entityLocationId);
        editAddressDetails.entityId = Number(entityId);
        await EditEntityLocation(editAddressDetails).then((res) => {
            baseAlert("Entity created successfully", undefined, "success").then(() => {
                navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${entityId}&EntityLocationId=${entityLocationId}`)
                SetRefresh(!refresh);
            })
        })
    }
    const CancelEditEntityLocation = () => {
        navigate(`${ApplicationRoutes().EntityLocation.route}?EntityId=${entityId}`);
    }
    const actions = () => {
        return (


            <>
                <Grid container p={3}>
                    <Grid item xs={12} sm={6} md={8}>

                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Button variant="contained" label="Cancel" onClick={CancelEditEntityLocation} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>

                        <Button variant="contained" label="Submit" onClick={UpdateEntity} />

                    </Grid>
                </Grid>
            </>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            <Card title="Address Details" actions={actions}>
                <EditAddressDetails />
            </Card>
        </>
    )
}
export default EditAddressDetailsSection;