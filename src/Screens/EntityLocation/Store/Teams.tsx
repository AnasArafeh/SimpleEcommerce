import { Language } from "../../../Store/LanguageEnum";
import { ICreateTeam, IEditTeam, ITeamColumns } from "../Models/ITeamsModel";

export const initialCreateTeams: ICreateTeam = {
    departmentId: 0,
    details: [
        {
            entityLocationTeamId: 0,
            entityLocationTeamName: '',
            localeId: Language.En
        },
        {
            entityLocationTeamId: 0,
            entityLocationTeamName: '',
            localeId: Language.Ar
        }
    ],
    entityLocationId: 0
}

export const initialEditTeams : IEditTeam = {
    id: null,
    departmentId: 0,
    details: [
        {
            entityLocationTeamId: 0,
            entityLocationTeamName: '',
            localeId: Language.En
        },
        {
            entityLocationTeamId: 0,
            entityLocationTeamName: '',
            localeId: Language.Ar
        }
    ],
    entityLocationId: 0
}
//todo
export const teamsColumns: ITeamColumns[] = [
    {
        id: 'departmentId',
        label: 'Department',
        minWidth: 130,
        align: "center",
    },
    {
        id: 'entityLocationTeamName',
        label: 'Name',
        minWidth: 130,
        align: "center",
       format: ({ row }) => row.details.find(v => v.localeId === Language.En)!.entityLocationTeamName
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 130,
        align: "center",
    },
];