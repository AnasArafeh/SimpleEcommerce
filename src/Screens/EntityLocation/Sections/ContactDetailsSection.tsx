import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import { Loader } from "../../../Components/Loader/Loader";
import { GetParams } from "../../../Helpers/HttpHelper";
import { useNavigate } from "react-router-dom";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { getContactById, getContactList } from "../../../Services/EntityLocation";
import { CreateContact, UpdateContact } from "../Services/EntityLocation";
import SuccessDialog from "../../../Components/SuccessDialog/SuccessDialog";
import Paper from "../../../Components/Paper/Paper";
import CreateContactDetails from "../Component/ContactDetails/CreateContactDetails";
import ContactDetailsList from "../Component/ContactDetails/ContactDetailsList";
import EditContactDetails from "../Component/ContactDetails/EditContactDetails";

const ContactDetailsSection = () => {

    const { SetEditContactDetails, SetRefresh, SetIsLoading, SetContactList, state: { editContactDetails, isLoading, refresh, createContactDetails } } = useContext(EntityLocationContext);

    let entityId = GetParams("EntityId");
    let entityLocationId = GetParams("EntityLocationId");

    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        SetIsLoading(true);
        GetContactList();
    }, [refresh])

    useEffect(() => {
        if (editContactDetails.id !== null) {
            GetContactById();
            setEdit(true);
        }
    }, [editContactDetails.id])

    const GetContactById = async () => {
        await getContactById(editContactDetails.id!).then((result: any) => {
            SetEditContactDetails(result.data.result)
        }).finally(() => SetIsLoading(false));
    }

    const GetContactList = async () => {
        await getContactList(entityLocationId!, entityId!).then((result: any) => {
            SetContactList(result.data.result)
        }).finally(() => SetIsLoading(false));
    }

    const AddContactDetails = async () => {
        await CreateContact(createContactDetails).then(async (res) => {
            SuccessDialog({
                title: 'Contact created successfully', confirmButtonText: 'Add Contact', denyButtonText: 'Contact List',
                showDenyButton: true, showConfirmButton: true, icon: "success"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    SetRefresh(!refresh);
                }
                else if (result.isDenied) {
                    setCreate(false);
                }
            })
        });
    }

    const UpdateContactDetails = async () => {
        await UpdateContact(editContactDetails).then(async (res) => {
            SuccessDialog({
                title: 'Contact updated successfully', confirmButtonText: 'Edit Contact', denyButtonText: 'Contact List',
                showDenyButton: true, showConfirmButton: true, icon: "success"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    SetRefresh(!refresh);
                }
                else if (result.isDenied) {
                    SetRefresh(!refresh);
                    setEdit(false);
                }
            })
        });
    }

    const handleAdd = () => {
        setCreate(true);
    }
    const handleBackAction = () => {
        setCreate(false);
        setEdit(false);
    }

    const createActions = () => {
        return (
            <Box>
                <Grid container justifyContent={"space-between"} style={{ display: "flex" }}>
                    <Grid item>
                        <Button variant="contained" label="Back" onClick={handleBackAction} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" label="Submit" onClick={AddContactDetails} />
                    </Grid>
                </Grid>
            </Box>
        )
    }

    const editActions = () => {
        return (
            <>
                <Box>
                    <Grid container justifyContent={"space-between"} style={{ display: "flex" }}>
                        <Grid item>
                            <Button variant="contained" label="Back" onClick={(handleBackAction)} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" label="Submit" onClick={UpdateContactDetails} />
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }

    const listButtons = () => {
        return (
            <Grid container justifyContent={"flex-end"}>
                <Grid item xs={12} sm={12} md={6} style={{ textAlign: "end" }}>
                    <Button onClick={handleAdd} label={"New Contact"} variant={"contained"} />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Loader isActive={isLoading} />
            {create ?
                <Card title="Create Contact Details" actions={createActions}>
                    <CreateContactDetails />
                </Card>
                :
                edit ?
                    <Card title="Edit Contact Details" actions={editActions}>
                        <EditContactDetails />
                    </Card>
                    :
                    <Paper
                        title={"Contacts List"}
                        subTitle="This table shows the contacts list"
                        buttonComponent={listButtons}>
                        <ContactDetailsList />
                    </Paper>
            }
        </>
    )
}
export default ContactDetailsSection;