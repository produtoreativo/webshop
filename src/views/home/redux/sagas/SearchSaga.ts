import { takeLatest, put, select, call, fork, spawn } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GlobalStateWithInput, TYPE_SEARCH } from '../reducers/typeSearch';
import axios from 'axios';

type Product = {
    id: string,
    name: string
}

type ProductList = {
    list: Product[]
}

async function fetchData(): Promise<ProductList> {
    console.log(`Delayed execution for 1000 milliseconds`);
    const response = await axios.get('http://localhost:3000/search/products-list');
    console.log('Dados', response.data);
    return response.data as ProductList;

}

export function selector(state: GlobalStateWithInput): string | undefined {
    return state.searchInputValue;
}

export function* fetchDataSaga(fetchDataFn: () => Promise<ProductList>): SagaIterator {
    try {
        const searchInputValue = (yield select(selector)) as string | undefined;
        const inputValue = searchInputValue || ''; // Default to empty string if undefined
        if (inputValue.length >= 4) {
            console.log('****** saga', inputValue)
            const products: ProductList = (yield call(fetchDataFn)) as ProductList;
            console.log('****** products', products)
            yield put({ type: 'DATA_RECEIVED', payload: { data: 'Dados recebidos', products } });
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