import { Box, Checkbox, FormControlLabel, Grid, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { allDays, initialSelectedTime, weekDays } from "../../Store/WorkingHours";
import MultiSelect from "../../../../Components/MultiSelect/MultiSelect";
import TimeInput from "../../../../Components/TimeInput/TimeInput";
import Button from "../../../../Components/Button/Button";
import { EntityLocationContext } from "../../StateManagement/Reducers/EntityLocationReducer";


const EditWorkingHours = () => {
    const { SetAddOpeningHours, state: { addOpeningHours } } = useContext(EntityLocationContext);
    const [selectedDays, setSelectedDays] = useState<any[]>([]);
    const [selectedTime, setSelectedTime] = useState<any>(initialSelectedTime);


    const addShift = () => {
        //Check if the time is does not exists in the selected days then add the selected time for the selected days.
        addOpeningHours.forEach(day => {
            selectedDays.includes(day.dayName) && day.workingHours.push({ ...selectedTime, dayOfWeek: day.dayOfWeek, workingHoursId: Math.random() })
        })

        SetAddOpeningHours([...addOpeningHours]);
    }

    const handleHoursChange = (value, name, type) => {
        let time = value.split(":");

        setSelectedTime({ ...selectedTime, [name]: value, [`${type}Hour`]: Number(time[0]), [`${type}Minute`]: Number(time[1]) })
    }

    const handleSelectedDaysChange = (day, checked) => {
        if (day === allDays) {
            setSelectedDays(checked ? [...weekDays, allDays] : []);
        }
        else {
            const index = selectedDays.findIndex((selectedDay: any) => selectedDay === day);
            if (index === -1) {
                setSelectedDays([...selectedDays, day])
            }
            else {
                const selected = selectedDays;
                selected.splice(index, 1);
                setSelectedDays([...selected]);
            }
        }
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={4} md={4} mt={3} className="TextFieldContainer">
                <MultiSelect
                    id="day"
                    value={selectedDays}
                    name="day"
                    label="Select Day"
                    required
                    isValid={true}
                >
                    <MenuItem key={"all-sub"} value={allDays}>
                        <FormControlLabel
                            label="All"
                            style={{ width: "100%" }}
                            control={
                                <Checkbox
                                    checked={selectedDays.includes(allDays)}
                                    onChange={(e, checked) => handleSelectedDaysChange(allDays, checked)}
                                />
                            }
                        />
                    </MenuItem>
                    {weekDays.map(day => {
                        return (
                            <MenuItem key={day} value={day}>
                                <FormControlLabel
                                    label={day}
                                    style={{ width: "100%" }}
                                    control={
                                        <Checkbox
                                            checked={selectedDays.includes(day)}
                                            onChange={(e, checked) => handleSelectedDaysChange(day, checked)}
                                        />
                                    }
                                />
                            </MenuItem>
                        )
                    })}

                </MultiSelect>
            </Grid>

            <Grid item xs={12} sm={4} md={4} mt={3} className="TextFieldContainer">
                <TimeInput
                    id="fromTime"
                    label="From"
                    name="startTime"
                    labelType="above"
                    value={selectedTime.startTime}
                    onChange={(value, name) => handleHoursChange(value, name, "start")}
                    key={`fromTime-selectedTime`}
                />
            </Grid>
            <Grid item xs={12} sm={4} md={4} mt={3} className="TextFieldContainer">
                <TimeInput
                    id="toTime"
                    label="To"
                    name="endTime"
                    labelType="above"
                    value={selectedTime.endTime}
                    onChange={(value, name) => handleHoursChange(value, name, "end")}
                    key={`fromTime-selectedTime`}
                />
            </Grid>

            <Grid container justifyContent="flex-end" mt={2}>
                <Grid item>
                    <Box sx={{ justifyContent: "flex-end" }}>
                        <Button variant="contained" label="Add" disabled={false} onClick={addShift} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EditWorkingHours;