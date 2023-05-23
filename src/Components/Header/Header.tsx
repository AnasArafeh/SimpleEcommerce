import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Styles/Header.scss'
import { AppBar, useMediaQuery } from '@mui/material';
import { useContext } from 'react';
import { SharedContext } from '../../StateManagement/Reducers/SharedReducer';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Header = () => {

    const { SetOpenSidenav, SetMiniSidenav, state: { openSidenav, miniSidenav } } = useContext(SharedContext);

    const mdScreen = useMediaQuery('(max-width:1200px)');

    const handleSidenavToggle = () => {
        SetOpenSidenav(!openSidenav);
        SetMiniSidenav(false);
    }

    const handleMiniSidenavToggle = () => {
        SetMiniSidenav(!miniSidenav);
    }

    return (
        <AppBar position={"sticky"} className="box" >
            <Toolbar>
                {!mdScreen &&

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMiniSidenavToggle}
                    >
                         {!miniSidenav ? <MenuIcon className="theme" /> : <MenuOpenIcon className="theme" />}
                    </IconButton>
                }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}} className="theme" color='action'>
                    Dashboard
                </Typography>
                {mdScreen &&
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleSidenavToggle}
                    >
                        {openSidenav ? <MenuIcon className="theme" /> : <MenuOpenIcon className="theme" />}
                    </IconButton>
                }

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    //onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle className="theme" />
                </IconButton>
            </Toolbar>
        </AppBar >
    );
}



export default Header;