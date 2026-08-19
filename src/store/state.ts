export type GlobalState = {
    count: number;
    darkMode: string,
    cart: ShopCart.Cart,
    auth: ShopUser.Auth,
    order?: {
        isLoading: boolean;
        currentOrderId?: string;
    },
}

export const initialGlobalState: GlobalState = {
    count: 12,
    darkMode: 'light',
    cart: {
      count: 0,
      products: {
        data: []
      }
    },
    auth: {
      "accessToken": "",
      "createdAt": 1692454268106,
      "expireIn": "1h"
    },
  };