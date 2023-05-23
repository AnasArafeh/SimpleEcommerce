import { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundRoute from '../Components/NotFound/NotFound';
import { ApplicationRoutes } from '../Store/ApplicationRoutes';


const AppRoutes = () => {
    return (
        <Routes>
            {useMemo(() => (
                <>
                    {Object.values(ApplicationRoutes).map(route => {
                        return (
                            <Route key={route.name} path={route.route} element={route.component}></Route>
                        )

                    })}
                    <Route key={"not-found"} path={"*"} element={<NotFoundRoute />}></Route>
                </>
            ), [ApplicationRoutes])}
        </Routes>
    )
}

export default AppRoutes;