import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import TextField from "../../../../Components/TextField/TextField";
import { initialEditContactInfo } from "../../Store/ContactDetails";


const EditContactDetails = () => {
    const { SetEditContactDetails, state: { editContactDetails } } = useContext(EntityLocationContext);

    useEffect(() => {
        return () => {
            SetEditContactDetails(initialEditContactInfo);
        };
    }, [])


    const handleContractInfoChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        editContactDetails[name] = value;
        SetEditContactDetails({ ...editContactDetails })
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <TextField
                    id="name"
                    label="Contact Name"
                    type="text"
                    name="name"
                    value={editContactDetails.name}
                    onChange={handleContractInfoChange}
                    placeholder="Contact Name"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <TextField
                    id="email"
                    label="Contact Email"
                    type="text"
                    name="email"
                    value={editContactDetails.email}
                    onChange={handleContractInfoChange}
                    placeholder="Contact Email"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="mobile"
                    label="Contact Mobile"
                    type="text"
                    name="mobile"
                    placeholder="Contact Mobile"
                    value={editContactDetails.mobile}
                    onChange={handleContractInfoChange}
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="telephone"
                    label="Contact Telephone"
                    type="text"
                    name="telephone"
                    placeholder="Contact Telephone"
                    value={editContactDetails.telephone}
                    onChange={handleContractInfoChange}
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
        </Grid>
    )
}

export default EditContactDetails;