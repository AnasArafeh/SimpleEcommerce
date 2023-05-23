import { Grid } from "@mui/material";
import { useContext } from "react";
import CheckBox from "../../../../Components/CheckBox/CheckBox";
import { isEnglish } from "../../../../Helpers/RegexHelper";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";

const AddressLocationInfo = () => {
    const { SetCreateAddressDetails, state: { createAddressDetails, countryList } } = useContext(EntityLocationContext);

    const handleCheckBoxChange = (e) => {
        if (isEnglish.test(e.target.value)) {
            let name = e.target.name;
            let value = e.target.checked;
            createAddressDetails[name] = value;
            SetCreateAddressDetails({ ...createAddressDetails })
        }
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <CheckBox
                    id="showPrice"
                    label="Show Price"
                    mainLabel=""
                    onChange={handleCheckBoxChange}
                    value={createAddressDetails.showPrice}
                    required
                    name="showPrice"
                    checked={createAddressDetails.showPrice} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <CheckBox
                    id="servicesVisible"
                    label="Allow Multi Service Select"
                    mainLabel=""
                    onChange={handleCheckBoxChange}
                    value={createAddressDetails.servicesVisible}
                    required
                    name="servicesVisible"
                    checked={createAddressDetails.servicesVisible} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <CheckBox
                    id="autoApprove"
                    label="Auto Approve"
                    mainLabel=""
                    onChange={handleCheckBoxChange}
                    value={createAddressDetails.autoApprove}
                    required
                    name="autoApprove"
                    checked={createAddressDetails.autoApprove} />
            </Grid>
        </Grid>
    )
}
export default AddressLocationInfo;