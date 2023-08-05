import { bindActionCreators, Dispatch } from 'redux';
import { Product, ProductList } from "../models/ProductModel";
import typeSearch, { TYPE_SEARCH } from '../reducers/typeSearch';
import { GlobalState } from '../../../../redux/state';
import cartReducer from '../reducers/cartReducer';

export const FETCH_SUCCESS_PRODUCTS = '@@FETCH_SUCCESS_PRODUCTS';
export const ADD_TO_CART = '@@ADD_TO_CART';
export const REMOVE_FROM_CART = '@@REMOVE_FROM_CART';
export const CREATE_ORDER = '@@CREATE_ORDER';
export const CREATE_ORDER_SUCCESS = '@@CREATE_ORDER_SUCCESS';

export interface globalStateWithProducts extends GlobalState {
    products: ProductList,
}

export function productsSelector(state: globalStateWithProducts): ProductList {
    return state.products;
}

export const onChangeTypeSearch = (payload: string) => ({
    type: TYPE_SEARCH,
    payload,
    meta: {
        reducer: typeSearch,
    },
});


export const addToCart = (payload: Product) => ({
    type: ADD_TO_CART,
    payload,
    meta: {
        reducer: cartReducer,
    },
});

export const removeFromCart = (payload: Product) => ({
    type: REMOVE_FROM_CART,
    payload,
    meta: {
        reducer: cartReducer,
    },
});

export const createOrder = (payload: Product) => ({
    type: CREATE_ORDER,
    payload,
});

export const productActions = (dispatch: Dispatch) => bindActionCreators({
    onChangeTypeSearch,
    addToCart,
    removeFromCart,
    createOrder,
}, dispatch);