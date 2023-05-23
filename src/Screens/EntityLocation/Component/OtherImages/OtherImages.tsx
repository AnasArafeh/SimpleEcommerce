import { Grid } from "@mui/material";
import MultipleImageUpload from "../../../../Components/MultipleImageUpload/MultipleImageUpload";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import { useContext } from "react";

const OtherImages = () => {
     const { SetCreateOtherImages, state: { createOtherImages } } = useContext(EntityLocationContext);

     const handleImageChange = (files) => {
          SetCreateOtherImages({ ...createOtherImages, multipleImages: files[0] })
     }

     return (
          <Grid container p={3}>
               <Grid item xs={12} sm={12} md={12} mt={2}>
                    <MultipleImageUpload label="Other Images" uploadImage={handleImageChange} />
               </Grid>
          </Grid>
     )
}

export default OtherImages;