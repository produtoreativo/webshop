import { GlobalAction } from "../../../../redux/Reducer";

export type GlobalStateWithInput = {
    searchInputValue?: string;
}

export const TYPE_SEARCH = '@@TYPE_SEARCH';

function reducer(state: GlobalStateWithInput = {
    searchInputValue: '',
}, action: GlobalAction) {
    
    if (action.type === TYPE_SEARCH) {
        return {
            ...state,
            searchInputValue: action.payload,
        }
    }

    return state;
}

export default reducer;