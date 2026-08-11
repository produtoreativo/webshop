/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../views/home/Home';
import CheckoutScreen from '../views/checkout/Checkout';
import LayoutBase from '../layout/LayoutBase';
import GroupBuyingCard from "../views/group/GroupBuyingCard";

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
      },
      {
        path: "group/:groupId",
        Component: GroupBuyingCard,
      }
    ],
  },
]);

const RouterProviderImpl = () => (
  <RouterProvider router={router} />
);

export default RouterProviderImpl;
