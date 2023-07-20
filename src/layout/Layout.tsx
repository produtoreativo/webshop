import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, Container, Drawer, Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { PropsWithChildren } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Suspense from '../components/Suspense';


function Layout(props: PropsWithChildren) {
    const theme = useTheme();
    return (
      <Container>
          <Drawer
            sx={{
              width: 150,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 150,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>

          <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
        }}>
          <CssBaseline />
          {/* header */}
          <AppBar
            enableColorOnDark
            position="static"
            color="inherit"
            elevation={0}
            sx={{
              // bgcolor: theme.palette.primary.main,
              // color: '#fff',
            }}
          >
            <Toolbar>
              Header
            </Toolbar>
          </AppBar>

          {/* main content */}
          {/* <Suspense>
            <Box>
              <div>
                <div>Carregou</div>
                {props.children}
              </div>
            </Box>
          </Suspense> */}
           <Box component="main">
            <div>
              <div>Carregou</div>
              {props.children}
            </div>
          </Box>

        </Box>

      </Container>

    )
}

export default Layout;