import { Box, Grid } from "@mui/material";
import TimeInput from "../../../Components/TimeInput/TimeInput";
import { ITiming, IWorkingDays, IWorkingHoursColumns } from "../Models/IWorkingHoursModel";
import AddIcon from '@mui/icons-material/Add';
import '../Style/WorkingHours.scss';

export const weekDays: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

export const allDays = "all";

export enum weekDaysNumber {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7
}


export const workingHoursColumns: IWorkingHoursColumns[] = [
    {
        id: 'dayName',
        label: 'Day',
        minWidth: 50,
        maxWidth: 50,
        align: "center",
        rowAlign: "left"
    },
    {
        id: 'workingHours',
        label: 'Time',
        minWidth: 130,
        align: "center",
        format: ({ row, rows, setState }) => {

            const handleHoursChange = (value, name, type, timeId) => {
                let time = value.split(":");
                let currentDay = rows.find(day => day.dayOfWeek === row.dayOfWeek);
                let currentTime = currentDay?.workingHours.find(hours => hours.workingHoursId === timeId);
                if (currentTime) {
                    currentTime[name] = value;
                    currentTime[`${type}Hour`] = Number(time[0]);
                    currentTime[`${type}Minute`] = Number(time[1]);
                }
                setState([...rows])
            }

            const removeTiming = (timing: ITiming, dayOfWeek) => {
                let filteredRows = rows.map(row => {
                    if (row.dayOfWeek === dayOfWeek) {
                        row.workingHours = row.workingHours.filter(workingHour => workingHour.workingHoursId !== timing.workingHoursId)
                    }
                    return row;
                })
                setState([...filteredRows])
            }

            const addTiming = (dayOfWeek) => {
                let newRows = rows.map(row => {
                    if (row.dayOfWeek === dayOfWeek) {
                        row.workingHours.push({ ...initialSelectedTime, dayOfWeek: dayOfWeek, workingHoursId: Math.random() })
                    }
                    return row;
                })
                setState([...newRows])
            }

            return (
                <Grid container>
                    {row.workingHours.map((timing, index) => {
                        return (
                            <>
                                <Grid item className="shiftFieldsItem">
                                    <Grid container className="shiftFieldsItemContainer">
                                        <button className="removeButton" onClick={(e) => removeTiming(timing, row.dayOfWeek)}>
                                            x
                                        </button>
                                        <Grid item className="timeFieldItem">
                                            <TimeInput
                                                id="fromTime"
                                                label="From"
                                                name="startTime"
                                                value={timing.startTime}
                                                onChange={(value, name) => handleHoursChange(value, name, "start", timing.workingHoursId)}
                                                styleObj={{ width: "100%" }}
                                                key={`${timing.startTime}-${timing.endTime}-${timing.dayOfWeek}`}
                                            />
                                        </Grid>

                                        <Grid item className="timeFieldItem">
                                            <TimeInput
                                                id="toTime"
                                                label="To"
                                                name="endTime"
                                                value={timing.endTime}
                                                onChange={(value, name) => handleHoursChange(value, name, "end", timing.workingHoursId)}
                                                styleObj={{ width: "100%" }}
                                                key={`${timing.startTime}-${timing.endTime}-${timing.dayOfWeek}`}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {
                                    index === row.workingHours.length - 1 &&
                                    <Grid item>
                                        <Box className="addShiftButtonContainer" onClick={() => { addTiming(row.dayOfWeek) }}>
                                            <AddIcon className="addShiftButton" />
                                        </Box>
                                    </Grid>
                                }
                            </>
                        )
                    })
                    }
                </Grid >
            )
        }
    }
];

export const initialSelectedTime = {
    startTime: "",
    endTime: "",
    startHour: 0,
    startMinute: 0,
    endHour: 0,
    endMinute: 0,
    workingHoursId: 0,
    dayOfWeek: 0,
}


export const initialWorkingHoursState: IWorkingDays[] = [
    {
        dayName: "Sunday",
        dayOfWeek: weekDaysNumber.Sunday,
        workingHours: []
    },
    {
        dayName: "Monday",
        dayOfWeek: weekDaysNumber.Monday,
        workingHours: []
    },
    {
        dayName: "Tuesday",
        dayOfWeek: weekDaysNumber.Tuesday,
        workingHours: []
    },
    {
        dayName: "Wednesday",
        dayOfWeek: weekDaysNumber.Wednesday,
        workingHours: []
    },
    {
        dayName: "Thursday",
        dayOfWeek: weekDaysNumber.Thursday,
        workingHours: []
    },
    {
        dayName: "Friday",
        dayOfWeek: weekDaysNumber.Friday,
        workingHours: []
    },
    {
        dayName: "Saturday",
        dayOfWeek: weekDaysNumber.Saturday,
        workingHours: []
    },
]