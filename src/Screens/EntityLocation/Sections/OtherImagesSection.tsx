import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import OtherImages from "../Component/OtherImages/OtherImages";
import { initialCreateOtherImages } from "../Store/OtherImages";


const OtherImagesSection = () => {

    const { SetIsLoading, SetCreateOtherImages, state: { isLoading } } = useContext(EntityLocationContext);
    const navigate = useNavigate();
    let entityId = GetParams("EntityId");

    useEffect(() => {
        //   SetIsLoading(true);
        return () => {
            SetCreateOtherImages(initialCreateOtherImages);
            SetIsLoading(false);
        };
    }, [])

    const SubmitEntityLocation = async () => {
        // createAddressDetails.entityId = Number(entityId);
        // await postEntityLocation(createAddressDetails).then((res) => {
        //     navigate(`${ApplicationRoutes().EditEntityLocation.route}?EntityId=${entityId}&EntityLocationId=${res.data.id}`)
        // })
    }

    const actions = () => {
        return (
            <Box>
                <Button variant="contained" label="Submit" onClick={SubmitEntityLocation} />
            </Box>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            <Card title="Other Images" actions={actions}>
                <OtherImages />
            </Card>
        </>
    )
}
export default OtherImagesSection;