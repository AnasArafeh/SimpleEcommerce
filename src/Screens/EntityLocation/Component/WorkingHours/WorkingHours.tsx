import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { initialSelectedTime, workingHoursColumns } from "../../Store/WorkingHours";
import DataTable from "../../../../Components/DataTable/DataTable";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";


const WorkingHours = () => {
    const { SetAddOpeningHours, state: { addOpeningHours } } = useContext(EntityLocationContext);
    const [selectedDays, setSelectedDays] = useState<any[]>([]);
    const [selectedTime, setSelectedTime] = useState<any>(initialSelectedTime);

    return (
        <Grid container p={3}>
            <Grid item xs={12} lg={12}>
                <DataTable
                    rows={addOpeningHours}
                    columns={workingHoursColumns}
                    isLoading={false}
                    setState={SetAddOpeningHours}
                />
            </Grid>
        </Grid>
    )
}

export default WorkingHours;