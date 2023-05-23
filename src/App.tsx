import { Suspense, useContext, useEffect } from 'react';
import { SharedContext } from './StateManagement/Reducers/SharedReducer';
import { Loader } from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/Routes';
import Sidenav from './Components/SideNav/Sidenav';
import { Box, useMediaQuery } from '@mui/material';

function App() {
  const { SetOpenSidenav, state: { miniSidenav } } = useContext(SharedContext);
  const mdScreen = useMediaQuery('(max-width:1200px)');



  useEffect(() => {
    SetOpenSidenav(!mdScreen);
  }, [mdScreen])
  return (
    <Suspense fallback={<Loader isActive={true} isAbsolute={true} isWithoutText={true} />}>
      <Sidenav />
      <Box style={{ marginLeft: mdScreen ? "0rem" : miniSidenav ? "6rem" : "17.125rem", padding: "24px" }}>
        <Header />
        {/* {token && */}
        <AppRoutes />
        {/* } */}
      </Box>
    </Suspense>
  );
}

export default App;
