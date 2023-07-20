import { Reducer, Action } from "redux";

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

// export type Action extends AnyAction = {
//     type: string;
//     payload?: object;
//     meta?: Meta
// };

function reducer(state = {
    count: 15
}, action: GlobalAction): GlobalState {
    console.log('Reducer', action);
    if (action?.meta?.reducer) {
        return action.meta.reducer(state, action);
    }
    return state;
}

export default reducer;