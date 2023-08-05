
import { GlobalAction } from "../../../../redux/actions";
import { CREATE_ORDER_SUCCESS, globalStateWithProducts } from "../actions/productsAction";
import { Product } from "../models/ProductModel";

interface ProductAction extends GlobalAction {
    payload: Product
}

function reducer(state: globalStateWithProducts, action: ProductAction) {
    if (action.type === CREATE_ORDER_SUCCESS) {
        console.log("Create order", action.payload)
        return {
            ...state,
        }
    }
    return state;
}

export default reducer;