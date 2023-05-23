import { Box, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import Box from "../../../Components/Box/Box";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import { getCountriesList } from "../../../Services/EntityLocation";
import { postEntityLocation } from "../Services/EntityLocation";
import { initialCreateAddressDetails } from "../Store/CreateAddressDetails";
import Address from "../Component/CreateAddressDetails/Address";
import AddressLocationInfo from "../Component/CreateAddressDetails/AddressLocationInfo";
import AddressLocationImage from "../Component/CreateAddressDetails/AddressLocationImage";


const CreateAddressDetailsSection = () => {

    const { SetCreateAddressDetails, SetIsLoading, SetCountriesList, state: { isLoading, createAddressDetails } } = useContext(EntityLocationContext);
    const navigate = useNavigate();
    let entityId = GetParams("EntityId");

    useEffect(() => {
        SetIsLoading(true);
        GetCountries();
        return () => {
            SetCreateAddressDetails(initialCreateAddressDetails);
            SetIsLoading(false);
        };
    }, [])

    const GetCountries = async () => {
        await getCountriesList().then((result) => {
            SetCountriesList(result.data.result);

        }).finally(() => SetIsLoading(false));
    }
    const SubmitEntityLocation = async () => {
        createAddressDetails.entityId = Number(entityId);
        await postEntityLocation(createAddressDetails).then((res) => {
            navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${entityId}&EntityLocationId=${res.data.id}`)
        })
    }

    const CancelEntityLocation = () => {
        navigate(`${ApplicationRoutes().EntityLocation.route}?EntityId=${entityId}`);
    }
    const actions = () => {
        return (
            <>
                <Grid container p={3}>
                    <Grid item xs={12} sm={6} md={8}>

                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Button variant="contained" label="Cancel" onClick={CancelEntityLocation} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>

                        <Button variant="contained" label="Submit" onClick={SubmitEntityLocation} />

                    </Grid>
                </Grid>
            </>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            <Card title="Create Entity Location" actions={actions}>
                <Address />
                <AddressLocationInfo />
                <AddressLocationImage />
            </Card>
        </>
    )
}
export default CreateAddressDetailsSection;