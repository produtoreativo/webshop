import { GlobalAction } from "../../../../redux/Reducer";
import { FETCH_SUCCESS_PRODUCTS, globalStateWithProducts } from "../actions/productsAction";

function reducer(state: globalStateWithProducts = {
    products: { data: []},
}, action: GlobalAction) {
    
    if (action.type === FETCH_SUCCESS_PRODUCTS) {
        return {
            ...state,
            products: action.payload,
        }
    }

    return state;
}

export default reducer;