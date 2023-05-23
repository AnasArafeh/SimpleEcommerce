import { Box, Grid, MenuItem, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CheckBox from "../../../../Components/CheckBox/CheckBox";
import RadioButton from "../../../../Components/RadioButton/RadioButton";
import Select from "../../../../Components/Select/Select";
import TextField from "../../../../Components/TextField/TextField";
import ImageUpload from "../../../../Components/ImageUpload/ImageUpload";
import TableButton from "../../../../Components/TableButton/TableButton";
import { Language } from "../../../../Store/LanguageEnum";
import { Hours, Minutes } from "../../../Resource/Store/ServiceOptionsWorkingHours";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";
import { PriceType } from "../../../../Store/priceTypeEnum";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataTable from "../../../../Components/DataTable/DataTable";
import TableOperations from "../../../../Components/TableOperations/TableOperations";
import { serviceColumns } from "../../Store/Services";
import Button from "../../../../Components/Button/Button";
import { isArabic, isEnglish } from "../../../../Helpers/RegexHelper";
import { IServiceColumns } from "../../Models/IServicesModel";

const EntityLocationServices = () => {
    const [priceTypeValue, SetPriceTypeValue] = useState<any>(PriceType.price);
    const { SetEntityLocationServices, SetRefresh, state: { serviceList, optionServiceList, entityLocationServices, refresh } } = useContext(EntityLocationContext);

    useEffect(() => {
        if (entityLocationServices.serviceTypeId !== 0) {
            entityLocationServices.details = optionServiceList.find(x => x.id == entityLocationServices.serviceTypeId)!.details;
            SetEntityLocationServices({ ...entityLocationServices });
        }
    }, [entityLocationServices.serviceTypeId])


    const rowActions = (row: IServiceColumns) => {

        return (
            <Grid container justifyContent={"center"}>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { }} title="Edit"><EditIcon /></TableButton>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={2.5}>
                    <TableButton onClick={() => { }} title="Delete"><DeleteIcon /></TableButton>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <TableOperations
                >
                    <DataTable
                        rows={optionServiceList}
                        columns={serviceColumns}
                        isLoading={false}
                        actionsComponent={rowActions}
                    />
                </TableOperations>
            </Grid>
        </Grid>
    )
}
export default EntityLocationServices;