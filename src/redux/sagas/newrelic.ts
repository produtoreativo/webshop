import { spawn, takeEvery, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { BrowserAgent } from '@newrelic/browser-agent';
import { FAILURE, GlobalAction } from '../actions';
import { Location } from 'react-router';

interface ActionForNewrelic extends GlobalAction {
    payload: Location
}

export function* fetchDataSaga(action: GlobalAction): SagaIterator {
    try {
        const newrelic: BrowserAgent = (yield getContext('newRelicAgent')) as BrowserAgent;
        if(action.type === '@@route_navigation') {
            const actionForNewrelic = action as ActionForNewrelic;
            newrelic.setPageViewName(actionForNewrelic.payload.pathname)
        } else if (action.type === FAILURE) {
            newrelic.noticeError(action.payload as Error);
        } else {
            console.log('PAGE ACTION', action.type);
            newrelic.addPageAction(action.type, action.payload)
        }
    } catch (error) {
        console.log('****** error', error)
    }
}

export function* newRelicSaga(): SagaIterator {
    yield takeEvery('*', fetchDataSaga);
}

export function* rootSaga(): SagaIterator {
    yield spawn(newRelicSaga)
}