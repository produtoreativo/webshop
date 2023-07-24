import { ProductList } from "../models/ProductModel";

export const FETCH_SUCCESS_PRODUCTS = '@@FETCH_SUCCESS_PRODUCTS';

export type globalStateWithProducts = {
    products: ProductList,
}

export function productsSelector(state: globalStateWithProducts): ProductList {
    return state.products || { data: [] };
}
