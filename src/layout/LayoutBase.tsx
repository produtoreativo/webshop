import { Box } from '@mui/material';

import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideMenu from './SideMenu';

function Layout() {
    const dispatch = useDispatch();
    const location = useLocation();

    // console.log('hash', location.hash);
    // console.log('pathname', location.pathname);
    // console.log('search', location.search);
    // console.log(location);
    dispatch({
        type: '@@route_navigation', payload: location,
    })

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <SideMenu />
            <Box component="main" sx={{
                flexGrow: 1
            }}>
                <Outlet />
            </Box>
        </Box>

    )
}

export default Layout;