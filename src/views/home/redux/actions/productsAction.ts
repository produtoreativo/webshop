import { bindActionCreators, Dispatch } from 'redux';
import { ProductList } from "../models/ProductModel";
import typeSearch, { TYPE_SEARCH } from '../reducers/typeSearch';
import { GlobalState } from '../../../../redux/state';

export const FETCH_SUCCESS_PRODUCTS = '@@FETCH_SUCCESS_PRODUCTS';

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

export const productActions = (dispatch: Dispatch) => bindActionCreators({
    onChangeTypeSearch,
}, dispatch);