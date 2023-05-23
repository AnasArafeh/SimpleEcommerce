import { Grid, MenuItem } from "@mui/material";
import { useContext } from "react";
import Select from "../../../../Components/Select/Select";
import TextArea from "../../../../Components/TextArea/TextArea";
import TextField from "../../../../Components/TextField/TextField";
import { numberNulltoEmpty } from "../../../../Helpers/NumberHelper";
import { isNumber, GetLanguageRegex } from "../../../../Helpers/RegexHelper";
import { Language } from "../../../../Store/LanguageEnum";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";

const Address = () => {
    const { SetCreateAddressDetails, state: { createAddressDetails, countryList } } = useContext(EntityLocationContext);

    const handleAddressInfoChange = (e, localeId) => {
        if (GetLanguageRegex(localeId).test(e.target.value)) {
            createAddressDetails.details.find(i => i.localeId === localeId)![e.target.name] = e.target.value;
            SetCreateAddressDetails({ ...createAddressDetails })
        }
    }

    const handleAddressInfoLocationChange = (e, localeId) => {
        if (GetLanguageRegex(localeId).test(e.target.value)) {
            createAddressDetails.location.details.find(i => i.localeId === localeId)![e.target.name] = e.target.value;
            SetCreateAddressDetails({ ...createAddressDetails })
        }
    }

    const handleLocationsChange = (e) => {
        if (isNumber.test(e.target.value)) {
            createAddressDetails.location[e.target.name] = e.target.value;
            SetCreateAddressDetails({ ...createAddressDetails })
        }
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="latitude"
                    label="Latitude"
                    type="text"
                    name="latitude"
                    value={numberNulltoEmpty(createAddressDetails.location.latitude)}
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
                    value={numberNulltoEmpty(createAddressDetails.location.longitude)}
                    onChange={handleLocationsChange}
                    placeholder="longitude"
                    required
                />
            </Grid>
            <Grid item xs={6} sm={6} md={6} mt={3} className="TextFieldContainer">
                <Select
                    id="countryId"
                    value={createAddressDetails.location.countryId}
                    name="countryId"
                    onChange={handleLocationsChange}
                    label="Country"
                    required
                    isValid={true}>
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
                    value={createAddressDetails.location.details.find(i => i.localeId === Language.En)!.description}
                    onChange={(e) => handleAddressInfoLocationChange(e, Language.En)}
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
                    value={createAddressDetails.location.details.find(i => i.localeId === Language.Ar)!.description}
                    onChange={(e) => handleAddressInfoLocationChange(e, Language.Ar)}
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
                    value={createAddressDetails.location.details.find(i => i.localeId === Language.En)!.city}
                    onChange={(e) => handleAddressInfoLocationChange(e, Language.En)}
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
                    value={createAddressDetails.location.details.find(i => i.localeId === Language.Ar)!.city}
                    onChange={(e) => handleAddressInfoLocationChange(e, Language.Ar)}
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
                    value={createAddressDetails.location.details.find(i => i.localeId === Language.En)!.street}
                    onChange={(e) => handleAddressInfoLocationChange(e, Language.En)}
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
                    value={createAddressDetails.location.details.find(i => i.localeId === Language.Ar)!.street}
                    onChange={(e) => handleAddressInfoLocationChange(e, Language.Ar)}
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
                    value={createAddressDetails.details.find(i => i.localeId === Language.En)!.building}
                    onChange={(e) => handleAddressInfoChange(e, Language.En)}
                    required
                    isValid={true}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="building"
                    label="المبنى"
                    type="text"
                    name="building"
                    placeholder="المبنى"
                    value={createAddressDetails.details.find(i => i.localeId === Language.Ar)!.building}
                    onChange={(e) => handleAddressInfoChange(e, Language.Ar)}
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
                    value={createAddressDetails.details.find(i => i.localeId === Language.En)!.description}
                    onChange={(e) => handleAddressInfoChange(e, Language.En)}
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
                    value={createAddressDetails.details.find(i => i.localeId === Language.Ar)!.description}
                    onChange={(e) => handleAddressInfoChange(e, Language.Ar)}
                    required
                    isValid={true}
                    rows={4}
                    direction={"rtl"}
                />
            </Grid>
        </Grid>
    )
}
export default Address;