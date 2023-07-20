type Action = {
    type: string;
    payload?: string;
};

function reducer(state = {}, action: Action) {
    if (action.type === 'type-search') {
        return {
            ...state,
            searchInputValue: action.payload,
        }
    }
    return state;
}

export default reducer;