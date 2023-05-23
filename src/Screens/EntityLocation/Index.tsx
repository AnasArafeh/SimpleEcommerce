import { EntityLocationProvider } from "./StateManagement/Reducers/EntityLocationReducer";
import './Style/EntityLocation.scss';
import EntityLocationsListScreen from "./Views/EntityLocationsListScreen";
import CreateEntityLocationScreen from "./Views/CreateEntityLocationScreen";
import EditEntityLocationScreen from "./Views/EditEntityLocationScreen";



const EntityLocationComponent = ({ component }) => {
    return (
        <EntityLocationProvider>
            {component === "createEntityLocation" && <CreateEntityLocationScreen />}
            {component === "entityLocations" && <EntityLocationsListScreen />}
            {component === "editEntityLocation" && <EditEntityLocationScreen/>}
            
        </EntityLocationProvider>
    )

}

export default EntityLocationComponent;