// Redux
import { Provider } from 'react-redux';
// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// MUI 
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// Customizações globais do Redux
import CustomStore from './redux/CustomStore';

import themes from './themes';
import Layout from './layout/Layout';
import Home from './views/home/Home';
import CheckoutScreen from './views/checkout/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "checkout",
        Component: CheckoutScreen,
      }
    ],
  },
]);

function App(): JSX.Element {
  const store = new CustomStore(router);

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
          <CssBaseline />
            <RouterProvider router={router} />          
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
