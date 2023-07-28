export type GlobalState = {
    count: number;
    darkMode: string,
    cart: ShopCart.Cart,
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
  };