import { takeLatest, put, call, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { FETCH_SUCCESS_PRODUCTS } from '../actions/productsAction';
import { FETCH_PRODUCTS_ON_LOAD } from '../actions/catalogoAction';
import { FAILURE } from '../../../../store/actions';
import { Axios } from 'axios';
import productsReducer from '../reducers/productsReducer';

interface ApiProduto {
    id: string;
    nome: string;
    preco: number;
    disponivel: boolean;
}

async function fetchProdutos(axios: Axios) {
    const response = await axios.get('/produtos');
    return response;
}

export function* fetchCatalogoSaga(): SagaIterator {
    try {
        const axios: Axios = (yield getContext('axios')) as Axios;
        const response: { data: { produtos: ApiProduto[] } } = (yield call(fetchProdutos, axios)) as { data: { produtos: ApiProduto[] } };
        const produtos = response.data.produtos.map((p: ApiProduto) => ({
            id: p.id,
            name: p.nome,
            price: String(p.preco),
            price_0_1: p.preco,
            disponivel: p.disponivel,
            addedToCart: false,
        }));
        yield put({
            type: FETCH_SUCCESS_PRODUCTS,
            payload: {
                data: produtos,
            },
            meta: {
                reducer: productsReducer,
            },
        });
    } catch (_error) {
        yield put({
            type: FAILURE,
            payload: { message: 'Serviço temporariamente indisponível. Tente novamente em instantes.' },
        });
    }
}

export function* catalogoSaga(): SagaIterator {
    yield takeLatest(FETCH_PRODUCTS_ON_LOAD, fetchCatalogoSaga);
}
