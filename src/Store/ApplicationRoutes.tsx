import React from "react";
import NotFoundRoute from "../Components/NotFound/NotFound";


const EntityLocationComponents = React.lazy(() => import('../Screens/EntityLocation/Index'));

export const ApplicationRoutes = {
    Entities: {
        name: "Entities",
        route: "/entity-location/",
        roles: [],
        component: <EntityLocationComponents component="editEntityLocation" />
    },
    NewEntity: {
        name: "NewEntity",
        route: "/entity/new-entity-location",
        roles: [],
        component: <EntityLocationComponents component="createEntityLocation" />
    },
    EditEntity: {
        name: "EditEntity",
        route: "/entity/edit-entity-location",
        roles: [],
        component: <EntityLocationComponents component="editLocation" />
    },
    NotFound: {
        name: "NotFound",
        route: "/404",
        roles: [],
        component: <NotFoundRoute />
    }
}