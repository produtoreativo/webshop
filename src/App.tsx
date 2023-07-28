// Redux
import { Provider } from 'react-redux';
// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Customizações globais do Redux
import CustomStore from './redux/CustomStore';

import Layout from './layout/Layout';
import Home from './views/home/Home';
import CheckoutScreen from './views/checkout/Checkout';
import LayoutBase from './layout/LayoutBase';

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutBase,
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
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Provider>
  );
}

export default App;
