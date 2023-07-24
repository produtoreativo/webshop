import { Link, Box, Drawer, Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Layout(props: PropsWithChildren) {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  console.log(location);
  dispatch({
    type: '@@route_navigation',
    payload: location,
  })

  return (
    <Box sx={{ 
      display: 'flex',
    }}>
      <Drawer
        sx={{
          width: 100,
          //backgroundColor: '#F0E9E9',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 100,
            boxSizing: 'border-box',
            backgroundColor: '#F0E9E9',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
            <ListItem key={"home"} >
              <ListItemButton component={RouterLink} to="/"
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <ListItemIcon sx={{
                  minWidth: 35,
                }}>
                  <HomeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>       

            <ListItem key={"shop"} >
              <ListItemButton component={RouterLink} to="/checkout"
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <ListItemIcon sx={{
                  minWidth: 35,
                }}>
                  <ShoppingCartOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary={"Comprar"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"orders"} >
              <ListItemButton sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <ListItemIcon sx={{
                  minWidth: 35,
                }}>
                  <LocalMallIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary={"Pedidos"} />
              </ListItemButton>
            </ListItem>
            

        </List>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        <Divider />
        <List>   
            <ListItem key={"exit"} >
              <ListItemButton sx={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <ListItemIcon sx={{
                  minWidth: 35,
                }}>
                  <ExitToAppIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary={"Sair"} />
              </ListItemButton>
            </ListItem>
        </List>

      </Drawer>

      <Box component="main" sx={{
        flexGrow: 1
      }}>
          {props.children}
          <Outlet />
      </Box>

    </Box>

  )
}

export default Layout;