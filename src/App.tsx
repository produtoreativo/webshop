// Redux
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// MUI 
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// // React Navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Customizações globais do Redux
import CustomStore from './redux/CustomStore';
import rootReducer from './redux/Reducer';

// Nossas Views
import CheckoutScreen from './views/checkout/Checkout';
import HomeScreen from './views/home/Home';

import themes from './themes';
import Layout from './layout/Layout';

// const Stack = createNativeStackNavigator();

export const customization = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true
};

function App(): JSX.Element {
  const sagaMiddleware = createSagaMiddleware();
  const store = new CustomStore(rootReducer, sagaMiddleware);

  return (
    <Provider store={store}>

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <Layout>
            <div>Children</div>
          </Layout>
{/* 
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}

        </ThemeProvider>
      </StyledEngineProvider>


    </Provider>
  );
}

export default App;
