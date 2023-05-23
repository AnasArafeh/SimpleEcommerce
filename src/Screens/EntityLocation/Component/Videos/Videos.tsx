import { Box, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EntityLocationContext } from '../../StateManagement/Reducers/EntityLocationReducer';
import TableButton from '../../../../Components/TableButton/TableButton';
import DataTable from '../../../../Components/DataTable/DataTable';
import Button from '../../../../Components/Button/Button';
import TextField from '../../../../Components/TextField/TextField';
import TableOperations from '../../../../Components/TableOperations/TableOperations';
import { IEntity } from '../../../../Models/IEntity';
import { videosColumns } from '../../Store/Videos';


const AddVideos = () => {

    const [entities, setentites]: any = useState()
    const { SetAddVideosDetails, state: { addVideosDetails } } = useContext(EntityLocationContext);

    const handleVideosDetailsChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        addVideosDetails[name] = value;
        SetAddVideosDetails({ ...addVideosDetails })
    }

    const rowActions = (row: IEntity) => {

        return (
            <Grid container justifyContent={"center"}>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { }} title="Edit"><EditIcon /></TableButton>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { }} title="Delete"><DeleteIcon /></TableButton>
                </Grid>
                {/* <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => handleDelete(row)} title="Delete"><DeleteIcon /></TableButton>
                </Grid> */}
            </Grid>
        )
    }
    return (<>
        <Grid container p={3}>
            <Grid item xs={12} lg={12}>
                <TableOperations>
                    <DataTable
                        rows={entities}
                        columns={videosColumns}
                        isLoading={false}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
        </Grid>
    </>
    )
}

export default AddVideos;