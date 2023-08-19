import { takeLatest, put, select, call, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { CREATE_ORDER, CREATE_ORDER_SUCCESS } from '../actions/productsAction';
import { Axios } from 'axios';
import { GlobalState } from '../../../../redux/state';

export function selector(state: GlobalState): string | undefined {
    return state.auth?.accessToken;
}

async function pushOrderData(data: string, axios: Axios) {
    const response = await axios.post('/order', data);
    return response;
}

export function* pushOrderDataSaga(pushOrderDataFn, action): SagaIterator {
    try {
        const axios: Axios = (yield getContext('axios')) as Axios;
        const token = (yield select(selector)) as string | undefined;
        const data = { token, sku: action.payload.sku };
        const order = yield call(pushOrderDataFn, data, axios);
        yield put({
          type: CREATE_ORDER_SUCCESS,
          payload: {
            order: order.data,
          }
        });
        
        //PEGAR O TOKEN E SKU
        // const searchInputValue = (yield select(selector)) as string | undefined;
        // const inputValue = searchInputValue || ''; // Default to empty string if undefined
        // if (inputValue.length >= 4) {
        //     const products: ProductList = (yield call(fetchDataFn, inputValue, axios)) as ProductList;
        //     yield put({ 
        //         type: FETCH_SUCCESS_PRODUCTS, 
        //         payload: {
        //             data: products.data,
        //         },
        //         meta: {
        //             reducer: productsReducer
        //         }
        //     });
        // }
    } catch (error) {
        console.log('****** error', error)
    }
}

export function* ordersSaga(): SagaIterator {
    yield takeLatest(CREATE_ORDER, pushOrderDataSaga, pushOrderData);
}