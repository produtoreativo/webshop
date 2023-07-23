import { applyMiddleware, Store, Observable, Reducer, Dispatch, legacy_createStore } from 'redux';

import createSagaMiddleware, { Saga, SagaMiddleware, Task } from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import createReducer, { GlobalState, GlobalAction } from './Reducer';
import { Router } from '@remix-run/router';

interface StoreWithSagas {
    run<S extends Saga>(saga: S, ...args: Parameters<S>): Task
}

export default class CustomStore implements Store<GlobalState, GlobalAction>, StoreWithSagas {
    private store: Store<GlobalState, GlobalAction>;
    private sagaMiddleware: SagaMiddleware;
  
    constructor(router: Router) {
        this.sagaMiddleware = createSagaMiddleware();
        this.sagaMiddleware.setContext({ router });
        const middlewares = [
          this.sagaMiddleware
        ];
        const reducer = createReducer();

        this.store = legacy_createStore(
            reducer, 
            composeWithDevTools(applyMiddleware(...middlewares))
        );
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
