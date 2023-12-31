import { applyMiddleware, Store, Observable, Reducer, Dispatch, legacy_createStore } from 'redux';

import createSagaMiddleware, { Saga, SagaMiddleware, Task } from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import createReducer from './Reducer';
import { Router } from '@remix-run/router';
import { GlobalAction } from './actions';
import { GlobalState } from './state';
import NewRelicAgent from './newrelic';
import { rootSaga } from './sagas/newrelic';
import axios from './server';

interface StoreWithSagas {
    run<S extends Saga>(saga: S, ...args: Parameters<S>): Task
}

export default class CustomStore implements Store<GlobalState, GlobalAction>, StoreWithSagas {
    private store: Store<GlobalState, GlobalAction>;
    private sagaMiddleware: SagaMiddleware;
  
    constructor(router: Router) {
        this.sagaMiddleware = createSagaMiddleware({
          context: {
            newRelicAgent: NewRelicAgent(),
            axios,
          }
        });
        this.sagaMiddleware.setContext({ router });
        const middlewares = [
          this.sagaMiddleware
        ];
        const reducer = createReducer();
        this.store = legacy_createStore(
            reducer, 
            composeWithDevTools(applyMiddleware(...middlewares))
        );

        if (import.meta.env.VITE_ENABLE_NEWRELIC == 1) {
          this.sagaMiddleware.run(rootSaga);
        }
        
    }

    run<S extends Saga>(saga: S, ...args: Parameters<S>): Task {
        return this.sagaMiddleware.run(saga, ...args);
    }
  
    [Symbol.observable](): Observable<GlobalState> {
      return this.store[Symbol.observable]();
    }
  
    getState = (): GlobalState => {
      return this.store.getState();
    }

    dispatch: Dispatch<GlobalAction> = (action) => this.store.dispatch(action);  
  
    subscribe = (listener: () => void): () => void => {
      return this.store.subscribe(listener);
    }
  
    replaceReducer = (nextReducer: Reducer<GlobalState, GlobalAction>)  => {
      this.store.replaceReducer(nextReducer);
    }
}
