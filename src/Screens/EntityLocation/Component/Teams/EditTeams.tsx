import { useContext, useEffect } from 'react';
import { EntityLocationContext } from '../../StateManagement/Reducers/EntityLocationReducer';
import { isArabic, isEnglish } from '../../../../Helpers/RegexHelper';
import { Language } from '../../../../Store/LanguageEnum';
import Grid from '@mui/material/Grid/Grid';
import Select from '../../../../Components/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import TextField from '../../../../Components/TextField/TextField';
import { initialEditTeams } from '../../Store/Teams';

const EditTeams = () => {
    const { SetEditTeamDetails, state: { editTeamDetails, departmentsList } } = useContext(EntityLocationContext);

    useEffect(() => {
        return () => {
            SetEditTeamDetails(initialEditTeams);
        };
    }, [])

    const handleTeamInfoChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        editTeamDetails[name] = value;
        SetEditTeamDetails({ ...editTeamDetails })
    }

    const handleTeamNameChange = (e) => {
        if (isEnglish.test(e.target.value)) {
            editTeamDetails.details.find(i => i.localeId === Language.En)![e.target.name] = e.target.value;
            SetEditTeamDetails({ ...editTeamDetails })
        }
    }

    const handleArabicTeamNameChange = (e) => {
        if (isArabic.test(e.target.value)) {
            editTeamDetails.details.find(i => i.localeId === Language.Ar)![e.target.name] = e.target.value;
            SetEditTeamDetails({ ...editTeamDetails })
        }
    }

    return (
        <Grid container p={3}>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer">
                <Select
                    id="departmentId"
                    value={editTeamDetails.departmentId}
                    name="departmentId"
                    onChange={handleTeamInfoChange}
                    label="Select Department From List"
                    required
                    isValid={true}
                >
                    <MenuItem key={"none-sub"} value={0}>None</MenuItem>
                    {departmentsList.map(department => {
                        return (
                            <MenuItem key={department.id} value={department.id}>{department.name}</MenuItem>
                        )
                    })}
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3} className="TextFieldContainer"></Grid>
            <Grid item xs={12} sm={6} md={6} mt={2} className="TextFieldContainer">
                <TextField
                    id="entityLocationTeamName"
                    label="Team Name"
                    type="text"
                    name="entityLocationTeamName"
                    value={editTeamDetails.details.find(x => x.localeId == Language.En)!.entityLocationTeamName}
                    onChange={handleTeamNameChange}
                    placeholder="Team Name"
                    required

                />
            </Grid>

            <Grid item xs={12} sm={6} md={6} mt={2} className="TextFieldContainer">
                <TextField
                    id="entityLocationTeamName"
                    label="اسم الفريق"
                    type="text"
                    name="entityLocationTeamName"
                    value={editTeamDetails.details.find(x => x.localeId == Language.Ar)!.entityLocationTeamName}
                    onChange={handleArabicTeamNameChange}
                    placeholder="اسم الفريق"
                    required
                    direction={"rtl"}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={3}></Grid>
        </Grid>
    )
}

export default EditTeams