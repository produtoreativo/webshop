import { GlobalAction } from "../../../../redux/Reducer";
import { FETCH_SUCCESS_PRODUCTS, globalStateWithProducts } from "../actions/productsAction";
import { Product, ProductList } from "../models/ProductModel";

interface ProductAction extends GlobalAction {
    payload: ProductList
}

function reducer(state: globalStateWithProducts = {
    products: { data: []},
}, action: ProductAction) {
    
    if (action.type === FETCH_SUCCESS_PRODUCTS) {
        const data: Product[] = action.payload.data.map((product: Product) => {
            product.qty = 1;
            return product;
        })
        return {
            ...state,
            products: {
                data,
            },
        }
    }

    return state;
}

export default reducer;