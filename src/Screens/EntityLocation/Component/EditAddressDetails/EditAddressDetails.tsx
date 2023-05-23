import { Grid, MenuItem } from "@mui/material";
import { useContext, useEffect } from "react";
import CheckBox from "../../../../Components/CheckBox/CheckBox";
import Select from "../../../../Components/Select/Select";
import TextArea from "../../../../Components/TextArea/TextArea";
import TextField from "../../../../Components/TextField/TextField";
import ImageUpload from "../../../../Components/ImageUpload/ImageUpload";
import { numberNulltoEmpty } from "../../../../Helpers/NumberHelper";
import { isEnglish, isArabic, isNumber } from "../../../../Helpers/RegexHelper";
import { Language } from "../../../../Store/LanguageEnum";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";

const EditAddressDetails = () => {
    const { SetEditAddressDetails, state: { countryList, editAddressDetails, } } = useContext(EntityLocationContext);

    const handleAddressInfoChange = (e) => {
        if (isEnglish.test(e.target.value)) {
            editAddressDetails.details.find(i => i.localeId === Language.En)![e.target.name] = e.target.value;
            SetEditAddressDetails({ ...editAddressDetails })
        }

    }
    const handleLocationAddressInfoChange = (e) => {
        if (isEnglish.test(e.target.value)) {
            editAddressDetails.location.details.find(i => i.localeId === Language.En)![e.target.name] = e.target.value;
            SetEditAddressDetails({ ...editAddressDetails })
        }
    }
    const handleArabicAddressInfoChange = (e) => {
        if (isArabic.test(e.target.value)) {
            editAddressDetails.details.find(i => i.localeId === Language.Ar)![e.target.name] = e.target.value;
            SetEditAddressDetails({ ...editAddressDetails })
        }
    }
    const handleLocationArabicAddressInfoChange = (e) => {
        if (isArabic.test(e.target.value)) {
            editAddressDetails.location.details.find(i => i.localeId === Language.Ar)![e.target.name] = e.target.value;
            SetEditAddressDetails({ ...editAddressDetails })
        }
    }
    const handleLocationsChange = (e) => {
        if (isEnglish.test(e.target.value) && isNumber.test(e.target.value)) {
            editAddressDetails.location[e.target.name] = e.target.value;
            SetEditAddressDetails({ ...editAddressDetails })
        }
    }
    const handleCheckBoxChange = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        editAddressDetails[name] = value;
        SetEditAddressDetails({ ...editAddressDetails })
    }
    const handleImageChange = (files) => {
        SetEditAddressDetails({ ...editAddressDetails, image: files[0] })
    }


    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="latitude"
                    label="Latitude"
                    type="text"
                    name="latitude"
                    value={numberNulltoEmpty(editAddressDetails.location?.latitude)}
                    onChange={handleLocationsChange}
                    placeholder="Latitude"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="longitude"
                    label="longitude"
                    type="text"
                    name="longitude"
                    value={numberNulltoEmpty(editAddressDetails.location?.longitude)}
                    onChange={handleLocationsChange}
                    placeholder="longitude"
                    required
                />
            </Grid>
            <Grid item xs={6} sm={6} md={6} mt={3} className="TextFieldContainer">
                <Select
                    id="countryId"
                    value={editAddressDetails.location?.countryId}
                    name="countryId"
                    onChange={handleLocationsChange}
                    label="Country"
                    required
                    isValid={true}
                >
                    <MenuItem key={"none-sub"} value={0}>None</MenuItem>
                    {countryList.map(level => {
                        return (
                            <MenuItem key={level.id} value={level.id}>{level.name}</MenuItem>
                        )
                    })}
                </Select>
            </Grid>
            <Grid item xs={6} sm={6} md={6} mt={3} className="TextFieldContainer"></Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="description"
                    label="Location Name"
                    type="text"
                    name="description"
                    value={editAddressDetails.location?.details.find(x => x.localeId === Language.En)!.description}
                    onChange={handleLocationAddressInfoChange}
                    placeholder="Location Name"
                    required
                />
            </Grid>

            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="description"
                    label="اسم الموقع"
                    type="text"
                    name="description"
                    value={editAddressDetails.location?.details.find(x => x.localeId === Language.Ar)!.description}
                    onChange={handleLocationArabicAddressInfoChange}
                    placeholder="اسم الموقع"
                    required
                    direction={"rtl"}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="city"
                    label="City"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={editAddressDetails.location?.details.find(x => x.localeId === Language.En)!.city}
                    onChange={handleLocationAddressInfoChange}
                    required
                    isValid={true}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="city"
                    label="المدينه"
                    type="text"
                    name="city"
                    placeholder="المدينه"
                    value={editAddressDetails.location?.details.find(x => x.localeId === Language.Ar)!.city}
                    onChange={handleLocationArabicAddressInfoChange}
                    required
                    direction={"rtl"}
                    isValid={true}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="street"
                    label="Street"
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={editAddressDetails.location?.details.find(x => x.localeId === Language.En)!.street}
                    onChange={handleLocationAddressInfoChange}
                    required
                    isValid={true}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="street"
                    label="الشارع"
                    type="text"
                    name="street"
                    placeholder="الشارع"
                    value={editAddressDetails.location?.details.find(x => x.localeId === Language.Ar)!.street}
                    onChange={handleLocationArabicAddressInfoChange}
                    required
                    isValid={true}
                    direction={"rtl"}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="building"
                    label="Building"
                    type="text"
                    name="building"
                    placeholder="Building"
                    value={editAddressDetails.details?.find(x => x.localeId === Language.En)!.building}
                    onChange={handleAddressInfoChange}
                    required
                    isValid={true}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="buildingAR"
                    label="المبنى"
                    type="text"
                    name="building"
                    placeholder="المبنى"
                    value={editAddressDetails.details?.find(x => x.localeId === Language.Ar)!.building}
                    onChange={handleArabicAddressInfoChange}
                    required
                    isValid={true}
                    direction={"rtl"}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextArea
                    id="description"
                    label="Full Address"
                    type="text"
                    name="description"
                    placeholder="Full Address"
                    value={editAddressDetails.details?.find(x => x.localeId === Language.En)!.description}
                    onChange={handleAddressInfoChange}
                    required
                    isValid={true}
                    rows={4}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextArea
                    id="description"
                    label="العنوان الكامل"
                    type="text"
                    name="description"
                    placeholder="العنوان الكامل"
                    value={editAddressDetails.details?.find(x => x.localeId === Language.Ar)!.description}
                    onChange={handleArabicAddressInfoChange}
                    required
                    isValid={true}
                    rows={4}
                    direction={"rtl"}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <CheckBox
                    id="showPrice"
                    label="Show Price"
                    mainLabel=""
                    onChange={handleCheckBoxChange}
                    value={editAddressDetails.showPrice}
                    required
                    name="showPrice"
                    checked={editAddressDetails.showPrice} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <CheckBox
                    id="servicesVisible"
                    label="Allow Multi Service Select"
                    mainLabel=""
                    onChange={handleCheckBoxChange}
                    value={editAddressDetails.servicesVisible}
                    required
                    name="servicesVisible"
                    checked={editAddressDetails.servicesVisible} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <CheckBox
                    id="autoApprove"
                    label="Auto Approve"
                    mainLabel=""
                    onChange={handleCheckBoxChange}
                    value={editAddressDetails.autoApprove}
                    required
                    name="autoApprove"
                    checked={editAddressDetails.autoApprove} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer"></Grid>
            <Grid item xs={12} sm={12} md={12} mt={3} className="TextFieldContainer">
                <ImageUpload onChange={handleImageChange} label="Primary Image" value={editAddressDetails.imageUrl} />
            </Grid>
        </Grid>
    )
}
export default EditAddressDetails;