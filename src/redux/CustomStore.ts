import { 
    applyMiddleware, 
    legacy_createStore,
    Store, 
    Observable, 
    Reducer,
    Dispatch,
} from 'redux';
import { Saga, SagaMiddleware, Task } from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { GlobalState, GlobalAction } from './Reducer';

interface StoreWithSagas {
    run<S extends Saga>(saga: S, ...args: Parameters<S>): Task
}
  
export default class CustomStore implements Store<GlobalState, GlobalAction>, StoreWithSagas {
    private store: Store<GlobalState, GlobalAction>;
    private sagaMiddleware: SagaMiddleware;
  
    constructor(reducer: Reducer, sagaMiddleware: SagaMiddleware) {
        this.sagaMiddleware = sagaMiddleware;
        // this.sagaMiddleware.run();
        this.store = legacy_createStore(
            reducer, 
            composeWithDevTools(applyMiddleware(this.sagaMiddleware))
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
