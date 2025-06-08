import { spawn, takeEvery, getContext } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { BrowserAgent } from '@newrelic/browser-agent';
import { FAILURE, GlobalAction } from '../actions';
import { Location } from 'react-router';

interface ActionForNewrelic extends GlobalAction {
    payload: Location
}

export function* fetchDataSaga(action: GlobalAction): SagaIterator {
    const newrelic: BrowserAgent = (yield getContext('newRelicAgent')) as BrowserAgent;
    try {
        if(action.type === '@@route_navigation') {
            const actionForNewrelic = action as ActionForNewrelic;
            newrelic.setPageViewName(actionForNewrelic.payload.pathname)
        } else if (action.type === FAILURE) {
            // newrelic.noticeError(action.payload as Error);
            // newrelic.log('Log Error in NewRelic Saga ', {level: 'DEBUG'});
            newrelic.noticeError(action.payload as Error, action.meta?.params);
            console.log('****** error in newrelic saga', action.payload);
        } else {
            console.log('PAGE ACTION', action.type);
            newrelic.addPageAction(action.type, action.payload)
        }
    } catch (error) {
        // newrelic.log('Log Error in NewRelic Saga ');
        // newrelic.noticeError(new Error('Error in NewRelic Saga: [2]'));
        newrelic.noticeError('Error in NewRelic Saga: [3]');
        console.log('****** error in newrelic saga', error);
    }
}

export function* newRelicSaga(): SagaIterator {
    yield takeEvery('*', fetchDataSaga);
}

export function* rootSaga(): SagaIterator {
    yield spawn(newRelicSaga)
}