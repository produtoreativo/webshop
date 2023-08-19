import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, Switch, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { DarkMode } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { THEME_SWITCH, darkModeSelector } from "../redux/actions";

export default function SideMenu() {
    const dispatch = useDispatch();
    const darkMode: PaletteMode = useSelector(darkModeSelector) || 'dark' as PaletteMode;
    const darkModeValue = (darkMode === 'dark');

    const handleToggle = () => dispatch({
        type: THEME_SWITCH,
        payload: darkMode
    });

    return (
        <Drawer
            color='secondary'
            sx={{
                width: 100,
                //backgroundColor: '#F0E9E9',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 100,
                    boxSizing: 'border-box',
                    // backgroundColor: '#F0E9E9',
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

                <ListItem key={"orders"} >
                    <ListItemButton component={RouterLink} to="/checkout" sx={{
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
                <ListItem>
                    <ListItemButton sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <ListItemIcon sx={{
                            minWidth: 35,
                        }}>
                            <DarkMode fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={"Tema"} />
                        <Switch
                            onChange={handleToggle}
                            checked={darkModeValue}
                        />

                    </ListItemButton>
                </ListItem>
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
    )
}
