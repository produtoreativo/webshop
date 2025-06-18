import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../views/home/Home';
import CheckoutScreen from '../views/checkout/Checkout';
import LayoutBase from '../layout/LayoutBase';

export const router = createBrowserRouter([
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

const RouterProviderImpl = () => (
  <RouterProvider router={router} />
);

export default RouterProviderImpl;
