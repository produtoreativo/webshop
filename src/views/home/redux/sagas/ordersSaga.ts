import { takeLatest, put, call, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { CREATE_ORDER, CREATE_ORDER_SUCCESS } from '../actions/productsAction';
import { GlobalAction } from '../../../../store/actions';
import { Product } from '../models/ProductModel';
import { Axios } from 'axios';
import orderReducer from '../reducers/orderReducer';

interface CreateOrderAction extends GlobalAction {
    payload: Product;
}

async function pushOrderData(productId: string, axios: Axios) {
    const correlationId = crypto.randomUUID();
    const response = await axios.post('/pedidos', {
        productId,
        customerId: 'guest',
        correlationId,
    });
    return response;
}

export function* pushOrderDataSaga(
    pushOrderDataFn: (productId: string, axios: Axios) => Promise<unknown>,
    action: CreateOrderAction
): SagaIterator {
    try {
        const axios: Axios = (yield getContext('axios')) as Axios;
        const order: { data: { pedidoId: string } } = (yield call(pushOrderDataFn, action.payload.id, axios)) as { data: { pedidoId: string } };
        yield put({
            type: CREATE_ORDER_SUCCESS,
            payload: {
                pedidoId: order.data.pedidoId,
            },
            meta: {
                reducer: orderReducer,
            },
        });
    } catch (error: unknown) {
        const axiosError = error as { response?: { status?: number } };
        if (axiosError?.response?.status === 503) {
            yield put({
                type: '@@FAILURE',
                payload: { message: 'Serviço temporariamente indisponível. Tente novamente em instantes.' },
            });
        } else {
            yield put({
                type: '@@FAILURE',
                payload: { message: 'Erro ao criar pedido. Tente novamente.' },
            });
        }
    }
}

export function* ordersSaga(): SagaIterator {
    yield takeLatest(CREATE_ORDER, pushOrderDataSaga, pushOrderData);
}
