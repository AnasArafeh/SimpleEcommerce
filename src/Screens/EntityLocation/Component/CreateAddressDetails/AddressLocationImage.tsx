import { Grid } from "@mui/material";
import { useContext } from "react";
import ImageUpload from "../../../../Components/ImageUpload/ImageUpload";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";

const AddressLocationImage = () => {
    const { SetCreateAddressDetails, state: { createAddressDetails } } = useContext(EntityLocationContext);

    const handleImageChange = (files) => {
        SetCreateAddressDetails({ ...createAddressDetails, image: files[0] })
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={12} md={12} mt={3} className="TextFieldContainer">
                <ImageUpload onChange={handleImageChange} label="Primary Image" value={createAddressDetails.imageUrl} />
            </Grid>
        </Grid>
    )
}
export default AddressLocationImage;