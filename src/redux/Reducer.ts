import { Reducer, Action } from "redux";

interface State {
  count: number;
}

export type GlobalState = {
  count: number;
}

type Meta = {
  reducer: Reducer<GlobalState, GlobalAction>;
};

export interface GlobalAction extends Action {
  type: string;
  payload?: object;
  meta?: Meta;
}

export default function createReducer() {

  const initialStateWithRouter: State = {
    count: 12,
  };

  return (state: GlobalState = initialStateWithRouter, action: GlobalAction): GlobalState => {

    if (action?.meta?.reducer) {
      return action.meta.reducer(state, action);
    }

    return state;
  };
}
