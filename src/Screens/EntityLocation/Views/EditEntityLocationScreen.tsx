import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../../../Components/Box/Box";
import { GetParams } from "../../../Helpers/HttpHelper";
import { ApplicationRoutes } from "../../../Store/ApplicationRoutes";
import { EntityLocationContext } from "../StateManagement/Reducers/EntityLocationReducer";
import { EntityLocationTabs } from "../Store/EntityLocationTabs";

const EditEntityLocationScreen = () => {

    const { state: { } } = useContext(EntityLocationContext);
    const [currentTab, setCurrentTab] = useState("1");

    const navigate = useNavigate();

    let entityId = GetParams("EntityId");
    let entityLocationId = GetParams("EntityLocationId");

    useEffect(() => {
        if (!entityId && !entityLocationId) {
            navigate(ApplicationRoutes().Entities.route);
        }
    }, [])

    const handleChange = (e, newValue) => {
        setCurrentTab(newValue);
    }

    return (
        <Box>
            <TabContext value={currentTab}>
                <TabList onChange={handleChange} aria-label="Tabs" scrollButtons="auto" variant="scrollable" sx={{ marginBottom: "10px" }}>
                    {EntityLocationTabs.map((tab) => {
                        return (
                            <Tab key={tab.label} label={tab.label} value={tab.value} />
                        )
                    })}
                </TabList>
                {EntityLocationTabs.map((tab) => {
                    return (
                        <TabPanel key={`tab-panel-${tab.label}-${tab.value}`} value={tab.value} className="removePadding">
                            {tab.component}
                        </TabPanel>
                    )
                })}
            </TabContext>
        </Box>
    )
}

export default EditEntityLocationScreen;