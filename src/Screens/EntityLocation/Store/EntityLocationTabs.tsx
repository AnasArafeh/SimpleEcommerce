import { IEntityLocationTab } from "../Models/IEntityLocationModel";
import ContactDetailsSection from "../Sections/ContactDetailsSection";
import EditAddressDetailsSection from "../Sections/EditAddressDetailsSection";
import TeamsSection from "../Sections/TeamsSection";
import UsersSection from "../Sections/UsersSection";
import ServicesSection from "../Sections/ServicesSection";
import WorkingHoursSection from "../Sections/WorkingHoursSection";
import OtherImagesSection from "../Sections/OtherImagesSection";
import VideosSection from "../Sections/VideosSection";

export const EntityLocationTabs: IEntityLocationTab[] = [
    {
        label: "Address Details",
        value: "1",
        component: <EditAddressDetailsSection />,
        title: "Address Details"
    },
    {
        label: "Contact Details",
        value: "2",
        component: <ContactDetailsSection />,
        title: "Contact Details"
    },
    {
        label: "Teams",
        value: "3",
        component: <TeamsSection />,
        title: "Teams"
    },
    {
        label: "Users",
        value: "4",
        component: <UsersSection />,
        title: "Users"
    },
    {
        label: "Services",
        value: "5",
        component: <ServicesSection />,
        title: "Services"
    },
    {
        label: "Working Hours",
        value: "6",
        component: <WorkingHoursSection />,
        title: "Working Hours"
    },
    {
        label: "Other Images",
        value: "7",
        component: <OtherImagesSection />,
        title: "Other Images"
    },
    {
        label: "Videos",
        value: "8",
        component: <VideosSection />,
        title: "Videos"
    },
]
