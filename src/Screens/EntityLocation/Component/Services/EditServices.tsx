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
import Button from "../../../../Components/Button/Button";
import { isArabic, isEnglish } from "../../../../Helpers/RegexHelper";
import { IServiceColumns } from "../../Models/IServicesModel";

const EditEntityLocationServices = () => {
    const [priceTypeValue, SetPriceTypeValue] = useState<any>(PriceType.price);
    const { SetEntityLocationServices, SetRefresh, state: { serviceList, optionServiceList, entityLocationServices, refresh } } = useContext(EntityLocationContext);

    useEffect(() => {
        if (entityLocationServices.serviceTypeId !== 0) {
            entityLocationServices.details = optionServiceList.find(x => x.id == entityLocationServices.serviceTypeId)!.details;
            SetEntityLocationServices({ ...entityLocationServices });
        }
    }, [entityLocationServices.serviceTypeId])


    const handleRadioButtonChange = (e) => {
        let value = e.target.value;
        if (value === 'range') {
            SetPriceTypeValue(PriceType.range)
        }
        else {
            SetPriceTypeValue(PriceType.price)
        }
    }

    const handleCustomerSeriveInfoChange = (e) => {
        if (isEnglish.test(e.target.value)) {
            entityLocationServices.details.find(i => i.localeId === Language.En)![e.target.name] = e.target.value;
            SetEntityLocationServices({ ...entityLocationServices })
        }
    }

    const handleArabicCustomerSeriveInfoChange = (e) => {
        if (isArabic.test(e.target.value)) {
            entityLocationServices.details.find(i => i.localeId === Language.Ar)![e.target.name] = e.target.value;
            SetEntityLocationServices({ ...entityLocationServices })
        }
    }

    const handleServiceListChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        entityLocationServices[name] = value;
        SetEntityLocationServices({ ...entityLocationServices });

    }

    const handleImageChange = (files) => {
        SetEntityLocationServices({ ...entityLocationServices, image: files[0] })
    }

    const handleCheckBoxChange = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        entityLocationServices[name] = value;
        SetEntityLocationServices({ ...entityLocationServices });
    }

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

        <Grid container p={3}>

            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">

                <Select
                    id="serviceTypeId"
                    value={entityLocationServices.serviceTypeId}
                    name="serviceTypeId"
                    onChange={handleServiceListChange}
                    label="Select Service From List"
                    required
                    isValid={true}>
                    <MenuItem key={"none-sub"} value={0}>None</MenuItem>
                    {serviceList.map(service => {
                        return (
                            <MenuItem key={service.id} value={service.id} >{service.name}</MenuItem>
                        )
                    })}
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={6} className="TextFieldContainer"></Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="title"
                    label="Custom Service Name"
                    type="text"
                    name="title"
                    value={entityLocationServices.details.find(x => x.localeId === Language.En)!.title}
                    onChange={handleCustomerSeriveInfoChange}
                    placeholder="Custom Service Name"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="title"
                    label="اسم خاص للخدمة"
                    type="text"
                    name="title"
                    value={entityLocationServices.details.find(x => x.localeId === Language.Ar)!.title}
                    onChange={handleArabicCustomerSeriveInfoChange}
                    placeholder="اسم خاص للخدمة"
                    direction={"rtl"}
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="description"
                    label="Custom Service Description"
                    type="text"
                    name="description"
                    value={entityLocationServices.details.find(x => x.localeId === Language.En)!.description}
                    onChange={handleCustomerSeriveInfoChange}
                    placeholder="Custom Service Description"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <TextField
                    id="description"
                    label="وصف خاص للخدمة"
                    type="text"
                    name="description"
                    value={entityLocationServices.details.find(x => x.localeId === Language.Ar)!.description}
                    onChange={handleArabicCustomerSeriveInfoChange}
                    placeholder="وصف خاص للخدمة"
                    required
                    direction={"rtl"}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <CheckBox
                    id="isDelivery"
                    label="Is Delivery"
                    mainLabel="Is Delivery"
                    onChange={handleCheckBoxChange}
                    value={entityLocationServices.isDelivery}
                    required
                    name="isDelivery"
                    checked={entityLocationServices.isDelivery} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <CheckBox
                    id="ownerOnly"
                    label="Owner Only"
                    mainLabel="Owner Only"
                    onChange={handleCheckBoxChange}
                    value={entityLocationServices.ownerOnly}
                    required
                    name="ownerOnly"
                    checked={entityLocationServices.ownerOnly} />
            </Grid>
            <Grid item container xs={12} sm={6} md={6} mt={1} className="TextFieldContainer">
                <Grid item xs={12} sm={5} md={5} mt={1}>
                    <Select
                        id="intervalHour"
                        value={entityLocationServices.intervalHour}
                        name="intervalHour"
                        onChange={handleServiceListChange}
                        label="Duration Hours"
                        required
                        isValid={true}>
                        <MenuItem key={"none-sub"} value={0}>None</MenuItem>
                        {Hours.map(level => {
                            return (
                                <MenuItem key={level.id} value={level.id}>{level.hour}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
                <Grid item xs={12} sm={1} md={1} mt={5} ml={2.5}><Typography>:</Typography> </Grid>
                <Grid item xs={12} sm={5} md={5} mt={1}>
                    <Select
                        id="intervalMinute"
                        value={entityLocationServices.intervalMinute}
                        name="intervalMinute"
                        onChange={handleServiceListChange}
                        label="Duration Minutes"
                        required
                        isValid={true}>
                        <MenuItem key={"none-sub"} value={'0'}>None</MenuItem>
                        {Minutes.map(level => {
                            return (
                                <MenuItem key={level.id} value={level.id}>{level.minute}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={6} mt={4} className="TextFieldContainer"></Grid>


            <Grid item xs={12} sm={12} md={12} mt={4} className="TextFieldContainer">

                <RadioButton
                    id="price"
                    label={["Value", "Range"]}
                    mainLabel="Price"
                    onChange={handleRadioButtonChange}
                    values={[PriceType.price, PriceType.range]}
                    required
                    name="price"
                    value={priceTypeValue}
                />

            </Grid>
            {priceTypeValue && priceTypeValue == PriceType.range ?
                <><Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                    <TextField
                        id="priceFrom"
                        label=""
                        type="text"
                        name="priceFrom"
                        value={entityLocationServices.priceFrom}
                        onChange={handleServiceListChange}
                        placeholder="Price From"
                        required />
                </Grid><Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                        <TextField
                            id="priceTo"
                            label=""
                            type="text"
                            name="priceTo"
                            value={entityLocationServices.priceTo}
                            onChange={handleServiceListChange}
                            placeholder="Price To"
                            required />
                    </Grid></>
                :
                <Grid item xs={12} sm={6} md={6} className="TextFieldContainer">
                    <TextField
                        id="price"
                        label=""
                        type="text"
                        name="price"
                        value={entityLocationServices.price}
                        onChange={handleServiceListChange}
                        placeholder="price"
                        required

                    />
                </Grid>}


            <Grid item xs={12} sm={12} md={12} mt={4} className="TextFieldContainer">
                <ImageUpload label="Service Image" onChange={handleImageChange} value={entityLocationServices.imageUrl} />
            </Grid>

            <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Box sx={{ justifyContent: "flex-end" }}>
                        <Button variant="contained" label="Edit" disabled={false} onClick={() => { }} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default EditEntityLocationServices;