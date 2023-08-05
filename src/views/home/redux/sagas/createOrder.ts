import { takeLatest, put, select, call, spawn, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { CREATE_ORDER, CREATE_ORDER_SUCCESS } from '../actions/productsAction';
import { Axios } from 'axios';
import orderReducer from '../reducers/orderReducer';

async function pushData(axios: Axios) {
    return await axios.post('/order');
}

export function* orderDataSaga(pushDataFn): SagaIterator {
    try {
        const axios: Axios = (yield getContext('axios')) as Axios;

        const payload = yield call(pushDataFn, axios);

        yield put({ 
            type: CREATE_ORDER_SUCCESS, 
            payload,
            meta: {
                reducer: orderReducer,
            }
        });

    } catch (error) {
        console.log('****** error', error)
    }
}

export function* createOrderSaga(): SagaIterator {
    yield takeLatest(CREATE_ORDER, orderDataSaga, pushData);
}