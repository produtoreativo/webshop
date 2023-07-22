import { Reducer, Action } from "redux";
import { connectRouter, LOCATION_CHANGE, LocationChangeAction, RouterState } from 'connected-react-router'
import { BrowserHistory } from "history";

export type GlobalState = {
 count: number;
}

type Meta = {
    reducer: Reducer<GlobalState>;
};

export interface GlobalAction extends Action {
    type: string;
    payload?: object;
    meta?: Meta
}

// function reducer(state = {
//     count: 15
// }, action: GlobalAction): GlobalState {
//     console.log('Reducer', action);
//     if (action?.meta?.reducer) {
//         return action.meta.reducer(state, action);
//     }
//     return state;
// }

// export default reducer;


interface State {
    router: RouterState<any>;
}

export default function createReducer(history: BrowserHistory) {
    const routerWithHistory = connectRouter(history);
  

    const initialStateWithRouter: State = {
        router: routerWithHistory(
            { location: history, action: history.action },
            undefined
        ),
    };
  
    return (state = initialStateWithRouter, action) => {
  
      if (action.type === LOCATION_CHANGE) {
        return {
          ...state,
          router: routerWithHistory(state.router, action as LocationChangeAction<any>)
        }
      }
  
      if (action?.meta?.reducer) {
        return action.meta.reducer(state, action);
    }
  
      return state;
    }
    
  }