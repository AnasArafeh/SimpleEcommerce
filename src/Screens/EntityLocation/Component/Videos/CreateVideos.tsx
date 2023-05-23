import { Box, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { EntityLocationContext } from '../../StateManagement/Reducers/EntityLocationReducer';
import Button from '../../../../Components/Button/Button';
import TextField from '../../../../Components/TextField/TextField';

const CreateAddVideos = () => {

    const [entities, setentites]: any = useState()
    const { SetAddVideosDetails, state: { addVideosDetails } } = useContext(EntityLocationContext);

    const handleVideosDetailsChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        addVideosDetails[name] = value;
        SetAddVideosDetails({ ...addVideosDetails })
    }

    return (
        <>
            <Grid container p={3}>
                <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                    <TextField
                        id="name"
                        label="Name"
                        type="text"
                        name="name"
                        value={addVideosDetails.name}
                        onChange={handleVideosDetailsChange}
                        placeholder="Name"
                        required
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                    <TextField
                        id="url"
                        label="Url"
                        type="text"
                        name="url"
                        value={addVideosDetails.url}
                        onChange={handleVideosDetailsChange}
                        placeholder="Url"
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Box sx={{ justifyContent: "flex-end" }}>
                            <Button variant="contained" label="Add" disabled={false} onClick={() => { }} />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CreateAddVideos;