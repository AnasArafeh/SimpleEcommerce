import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ApplicationRoutes } from './ApplicationRoutes';


export interface ISidenavRoutes {
    type: "title" | "list" | "item" | "divder",
    name: string,
    icon: any,
    items: ISidenavItems[] | null,
    roles: string[],
    route?: string
}

interface ISidenavItems {
    type: "item",
    name: string,
    route: string
}

export const SidenavRoutes: ISidenavRoutes[] = [
    {
        type: "title",
        name: "Pages",
        icon: <InboxIcon />,
        items: null,
        roles: [],
    },
    {
        type: "item",
        name: "Entity",
        icon: <InboxIcon />,
        items: null,
        route: ApplicationRoutes.Entities.route,
        roles: [],
    },
]