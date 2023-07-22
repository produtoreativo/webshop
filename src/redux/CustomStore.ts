import { 
    applyMiddleware, 
    legacy_createStore,
    Store, 
    Observable, 
    Reducer,
    Dispatch,
} from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware, { Saga, SagaMiddleware, Task } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from '@redux-devtools/extension';
import createReducer, { GlobalState, GlobalAction } from './Reducer';

interface StoreWithSagas {
    run<S extends Saga>(saga: S, ...args: Parameters<S>): Task
}

export const browserHistory = createBrowserHistory();
  
export default class CustomStore implements Store<GlobalState, GlobalAction>, StoreWithSagas {
    // private store: Store<GlobalState, GlobalAction>;
    private store: Store<any, any>;
    private sagaMiddleware: SagaMiddleware;
  
    constructor() {
        this.sagaMiddleware = createSagaMiddleware();
        const middlewares = [
          routerMiddleware(browserHistory), 
          this.sagaMiddleware
        ];
        const reducer = createReducer(browserHistory);
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
