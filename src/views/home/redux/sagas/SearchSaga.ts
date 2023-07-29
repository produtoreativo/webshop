import { takeLatest, put, select, call, spawn, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GlobalStateWithInput, TYPE_SEARCH } from '../reducers/typeSearch';
import { ProductList } from '../models/ProductModel';
import productsReducer from '../reducers/productsReducer';
import { FETCH_SUCCESS_PRODUCTS } from '../actions/productsAction';
import { Axios } from 'axios';

export function selector(state: GlobalStateWithInput): string | undefined {
    return state.searchInputValue;
}

async function fetchData(query: string, axios: Axios): Promise<ProductList> {
    const response = await axios.get(`/search?query=${query}`);
    return response as ProductList;
}

export function* fetchDataSaga(fetchDataFn: (query: string, axios: Axios) => Promise<ProductList>): SagaIterator {
    try {
        const axios: Axios = (yield getContext('axios')) as Axios;
        const searchInputValue = (yield select(selector)) as string | undefined;
        const inputValue = searchInputValue || ''; // Default to empty string if undefined
        if (inputValue.length >= 4) {
            const products: ProductList = (yield call(fetchDataFn, inputValue, axios)) as ProductList;
            yield put({ 
                type: FETCH_SUCCESS_PRODUCTS, 
                payload: {
                    data: products.data,
                },
                meta: {
                    reducer: productsReducer
                }
            });
        }
    } catch (error) {
        console.log('****** error', error)
    }
}

export function* productsSaga(): SagaIterator {
    yield takeLatest(TYPE_SEARCH, fetchDataSaga, fetchData);
}

export function* rootSaga(): SagaIterator {
    yield spawn(productsSaga)
}