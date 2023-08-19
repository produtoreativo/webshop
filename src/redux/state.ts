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
      "accessToken": "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjMsInV0eXBpZCI6MywiaWF0IjoxNjkyNDU5MjQ3LCJleHAiOjE2OTI0NjI4NDd9.lAUKNwpVkyW0PKEMs1Ud_G6z2gZzZNHxtnJboXZA-GM",
      "createdAt": 1692454268106,
      "expireIn": "1h"
    },
  };