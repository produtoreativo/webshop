
import { GlobalAction, THEME_SWITCH } from "./actions";
import { GlobalState, initialGlobalState } from "./state";

export default function createReducer() {

  return (state: GlobalState = initialGlobalState, 
    action: GlobalAction): GlobalState => {

    console.log('@@@@ REDUCER', action.type, state.darkMode)
    if (action.type === THEME_SWITCH) {
      return {
        ...state, 
        darkMode: state.darkMode == 'dark' ? 'light': 'dark',
      }
    }

    if (action?.meta?.reducer) {
      return action.meta.reducer(state, action);
    }

    return state;
  };
}
