import { takeLatest, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

type InputState = {
    searchInputValue: string;
}

export  function* rootSaga(): SagaIterator {
    yield takeLatest('type-search', fetchData);
}

function selector(state: InputState): string {
    return state.searchInputValue;
}

function * fetchData(): SagaIterator  {
    
    const searchInputValue: string = (yield select(selector)) as string;
    if (searchInputValue.length >= 4) {
        console.log('****** saga', searchInputValue)
        yield put({ type: 'DATA_RECEIVED', payload: { data: 'Dados recebidos' } });
    }

}