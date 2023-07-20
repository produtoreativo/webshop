import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// import { StackScreenProps } from '@react-navigation/stack';
// type RootStackParamList = {
//     Checkout: undefined;
//   };
// type Props = StackScreenProps<RootStackParamList, 'Checkout'>;

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

  function CheckoutScreen(props: any) {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
      console.log(props)
    //   return (
    //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //           <Text>Checkout!</Text>
    //           <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
    //       </View>
    //   );

      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {/* header */}
          <AppBar
            enableColorOnDark
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
              bgcolor: theme.palette.background.default,
            }}
          >
            <Toolbar>
              
            </Toolbar>
          </AppBar>
    
          {/* main content */}
          <Main theme={theme}>

          </Main>

        </Box>
      );

  }
  
  export default CheckoutScreen;