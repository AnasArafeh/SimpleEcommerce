import { Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { sideNavStyles } from "./Styles/Sidenav";
import BrandLogo from "../../Assets/images/App-logo.png";
import { SharedContext } from "../../StateManagement/Reducers/SharedReducer";
import CloseIcon from '@mui/icons-material/Close';
import { ISidenavRoutes, SidenavRoutes } from "../../Store/SidenavRoutes";
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from "react-router-dom";
import './Styles/Sidenav.scss'
const sidenavWidth = 240;
const miniSidenavWidth = 96;


const Sidenav = () => {
    const { SetOpenSidenav, SetMiniSidenav, state: { openSidenav, miniSidenav } } = useContext(SharedContext);

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState<any>({});
    const [isSelected, setIsSelected] = useState<any>({ index: 0, itemIndex: -1 });

    const mdScreen = useMediaQuery('(max-width:1200px)');

    useEffect(() => {
        if (miniSidenav) {
            setIsMenuOpen({})
        }
    }, [miniSidenav])


    const handleDrawerClose = () => {
        SetOpenSidenav(false);
    };

    const handleListMenu = (index) => {
        isMenuOpen[index] = isMenuOpen[index] === undefined ? true : !isMenuOpen[index];
        SetMiniSidenav(false);
        setIsMenuOpen({ ...isMenuOpen });
    }

    const handleListSelected = (route, index, itemIndex?) => {
        isSelected.index = index;
        isSelected.itemIndex = itemIndex;
        SetMiniSidenav(false);
        setIsSelected({ ...isSelected });
        navigate(route);
    }

    const createSidenav = (routes: ISidenavRoutes[]) => {

        return routes.map((route, index) => {

            if (route.type === "divder") {
                return <Divider className="divider" key={`${index}-divider`} />
            }
            else if (route.type === "title") {
                return <Typography className="title" key={`${index}-${route.name}`}>{route.name}</Typography>
            }
            else if (route.type === "item") {
                return (
                    <Box pl={1} pr={1} className="listItemBox" key={route.name}>
                        <ListItem disablePadding className={!miniSidenav && isSelected.index === index ? "itemSelected" : ""}>
                            <ListItemButton className="listItemButton" disableRipple onClick={() => handleListSelected(route.route, index)}>
                                <Box className="sidenavIconsBox" sx={{ background: isSelected.index === index ? "rgb(23, 193, 232)" : "#fff" }}>
                                    <ListItemIcon className="sidenavIcons" sx={{ color: isSelected.index === index ? "#fff" : "rgba(0, 0, 0, 0.54)" }}>
                                        {route.icon}
                                    </ListItemIcon>
                                </Box>
                                {!miniSidenav &&
                                    <ListItemText primary={route.name}
                                        primaryTypographyProps={{
                                            fontWeight: isSelected.index === index ? "bold" : 400,
                                            color: isSelected.index === index ? "rgb(52, 71, 103)" : "rgb(103, 116, 142)",
                                            paddingLeft: "15px"
                                        }} />
                                }
                            </ListItemButton>
                        </ListItem>
                    </Box>
                )
            }
            else if (route.type === "list" && !!route.items && route.items.length > 0) {
                return (
                    <Box key={route.name}>
                        <Box pl={1} pr={1} className="listItemBox" key={route.name}>
                            <ListItem disablePadding className={!miniSidenav && isSelected.index === index ? "itemSelected" : ""}>
                                <ListItemButton className="listItemButton" disableRipple onClick={() => handleListMenu(index)}>
                                    <Box className="sidenavIconsBox" sx={{ background: isSelected.index === index ? "rgb(23, 193, 232)" : "#fff" }}>
                                        <ListItemIcon className="sidenavIcons" sx={{ color: isSelected.index === index ? "#fff" : "rgba(0, 0, 0, 0.54)" }}>
                                            {route.icon}
                                        </ListItemIcon>
                                    </Box>
                                    {!miniSidenav &&
                                        <>
                                            <ListItemText
                                                key={`${index}-parent`}
                                                primary={route.name}
                                                primaryTypographyProps={{
                                                    className: "listItem",
                                                    fontWeight: isSelected.index === index ? "bold" : 400,
                                                    paddingLeft: "15px",
                                                    color: isSelected.index === index ? "rgb(52, 71, 103)" : "rgb(103, 116, 142)",
                                                }} />
                                            <KeyboardArrowDown
                                                sx={{
                                                    opacity: 1,
                                                    transform: isMenuOpen[index] ? 'rotate(-180deg)' : 'rotate(0)',
                                                    transition: '0.2s',
                                                    width: "0.8em"
                                                }}
                                            />
                                        </>

                                    }
                                </ListItemButton>
                            </ListItem>
                        </Box>
                        {isMenuOpen[index] && route.items!.map((item, itemIndex) => (
                            <Box className="listItemContainer" key={`${item.name}${itemIndex}-box`}>
                                <ListItemButton className="listItemButton" disableRipple onClick={() => handleListSelected(item.route, index, itemIndex)}>
                                    {!miniSidenav &&
                                        <>
                                            <ListItemText
                                                key={`${itemIndex}-dot`}
                                                primary={"●"}
                                                primaryTypographyProps={{ className: "dotItem" }}
                                                sx={{ textAlign: "end" }} />
                                            <ListItemText
                                                key={`${item.name}${itemIndex}-item`}
                                                primary={item.name}
                                                primaryTypographyProps={{
                                                    className: "listItem",
                                                    color: isSelected.index === index && isSelected.itemIndex === itemIndex ? "rgb(52, 71, 103)" : "rgb(103, 116, 142)",
                                                    fontWeight: isSelected.index === index && isSelected.itemIndex === itemIndex ? "bold" : 400
                                                }}
                                            />
                                        </>
                                    }
                                </ListItemButton>
                            </Box>
                        ))}
                    </Box>
                )
            }

        })
    }

    return (
        <Drawer
            sx={{
                width: sidenavWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: miniSidenav ? miniSidenavWidth : sidenavWidth,
                    ...(mdScreen ? sideNavStyles.smallContainer : sideNavStyles.container)
                },
            }}
            variant={"persistent"}
            anchor="left"
            open={openSidenav}
        >
            <Box className="titleContainer">
                <img src={BrandLogo} className="logo" />
                {!miniSidenav &&
                    <span style={{ whiteSpace: "nowrap" }} className="logoTitle">
                        Ecommerce Portal
                        {mdScreen && !miniSidenav && <IconButton onClick={handleDrawerClose} className="iconButton"><CloseIcon sx={{ fontSize: "1rem" }} />  </IconButton>}
                    </span>
                }

            </Box>
            <Divider className="divider" />
            <>
                {createSidenav(SidenavRoutes)}
            </>
        </Drawer >
    )
}

export default Sidenav;