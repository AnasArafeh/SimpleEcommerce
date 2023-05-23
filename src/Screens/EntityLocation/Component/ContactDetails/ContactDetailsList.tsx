import { Grid } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { EntityLocationContext } from '../../StateManagement/Reducers/EntityLocationReducer';
import DataTable from '../../../../Components/DataTable/DataTable';
import TableButton from '../../../../Components/TableButton/TableButton';
import TableOperations from '../../../../Components/TableOperations/TableOperations';
import { contactColumns } from '../../Store/ContactDetails';
import ConfirmationDialog from '../../../../Components/ConfirmationDialog/ConfirmationDialog';
import { DeleteContact } from '../../Services/EntityLocation';
import { IEntity } from '../../../../Models/IEntity';
import DeleteIcon from '@mui/icons-material/Delete';
import { IEditContactInfo } from '../../Models/IContactDetailsModel';


const ContactDetailsList = () => {

    const { SetRefresh, SetEditContactDetails, state: { contactList, refresh, editContactDetails } } = useContext(EntityLocationContext);
 
    const navigate = useNavigate();

    const handleDeleteContact = async (row: any) => {
        ConfirmationDialog(refresh, SetRefresh, row.id, DeleteContact, "Delete", true);
    }

    const handleEditContact = (id: number | null) => {
        SetEditContactDetails({...editContactDetails, id: id});
    }

    const rowActions = (row: IEditContactInfo) => {

        return (
            <Grid container justifyContent={"center"}>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => handleEditContact(row.id)} title="Edit"><EditIcon /></TableButton>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => handleDeleteContact(row)} title="Delete"><DeleteIcon /></TableButton>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container>
            <Grid item xs={12} lg={12}>
                <TableOperations>
                    <DataTable
                        rows={contactList}
                        columns={contactColumns}
                        isLoading={false}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
        </Grid>
    )

}


export default ContactDetailsList;