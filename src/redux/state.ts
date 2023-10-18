export type GlobalState = {
    count: number;
    darkMode: string,
    cart: ShopCart.Cart,
    auth: ShopUser.Auth,
}

export const initialGlobalState: GlobalState = {
    count: 12,
    darkMode: 'dark',
    cart: {
      count: 0,
      products: {
        data: []
      }
    },
    auth: {
      "accessToken": "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjMsInV0eXBpZCI6MywiaWF0IjoxNjkyNzE0ODI1LCJleHAiOjE2OTI3MTg0MjV9.YtRbvKrdMoqIiG3nTs7dJoK537526B60xdzAVu7Cmpo",
      "createdAt": 1692454268106,
      "expireIn": "1h"
    },
  };