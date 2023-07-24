import { takeLatest, put, select, call, } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GlobalStateWithInput, TYPE_SEARCH } from '../reducers/typeSearch';

type ProductList = {
    list: []
}

async function fetchData(): Promise<ProductList> {
    return new Promise((resolve) => {
        return resolve({ list: []});
    })
}

export function selector(state: GlobalStateWithInput): string | undefined {
    return state.searchInputValue;
}

export function * fetchDataSaga(fetchDataFn ): SagaIterator  {
    try {
        const searchInputValue: string | undefined = yield select(selector);
        if (searchInputValue.length >= 4) {
            console.log('****** saga', searchInputValue)
            debugger
            const products: ProductList = yield call(fetchDataFn);
            debugger
            console.log('****** products', products)
            yield put({ type: 'DATA_RECEIVED', payload: { data: 'Dados recebidos', products } });
        }        
    } catch (error) {
        console.log('****** error', error)
    }
}

export  function* rootSaga(): SagaIterator {
    yield takeLatest(TYPE_SEARCH, fetchDataSaga, fetchData);
}
