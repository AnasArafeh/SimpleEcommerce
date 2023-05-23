import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import TextField from "../../../../Components/TextField/TextField";
import { initialCreateContactInfo } from "../../Store/ContactDetails";


const CreateContactDetails = () => {
    const { SetCreateContactDetails, state: { createContactDetails } } = useContext(EntityLocationContext);


    useEffect(() => {
        return () => {
            SetCreateContactDetails(initialCreateContactInfo);
        };
    }, [])

    const handleContractInfoChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        createContactDetails[name] = value;
        SetCreateContactDetails({ ...createContactDetails })
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                <TextField
                    id="name"
                    label="Contact Name"
                    type="text"
                    name="name"
                    value={createContactDetails.name}
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
                    value={createContactDetails.email}
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
                    value={createContactDetails.mobile}
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
                    value={createContactDetails.telephone}
                    onChange={handleContractInfoChange}
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
        </Grid>
    )
}

export default CreateContactDetails;