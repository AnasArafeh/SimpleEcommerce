import Grid from "@mui/material/Grid";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { GetParams } from "../../../Helpers/HttpHelper";
import EntityLocationsListSection from "../Sections/EntityLocationsListSection";

const EntityLocationsListScreen = () => {
  const { state: { entityLocationsListRequest } } = useContext(EntityLocationContext);

  const navigate = useNavigate();
  let entityId = GetParams("EntityId");
  useEffect(() => {
    if (!entityId) {
      navigate(ApplicationRoutes().Entities.route);
    }
  }, [])


  return (
    <Grid container className="doriEntityLocationcontainer">
      <Grid item xs={12} lg={12}>
        <EntityLocationsListSection />
      </Grid>
    </Grid>
  );
}

export default EntityLocationsListScreen;
