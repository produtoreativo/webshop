
import { GlobalAction } from "../../../../redux/actions";
import { FETCH_SUCCESS_PRODUCTS, globalStateWithProducts } from "../actions/productsAction";
import { Product, ProductList } from "../models/ProductModel";
import ProductService from "../models/ProductService";


interface ProductAction extends GlobalAction {
    payload: ProductList
}

function reducer(state: globalStateWithProducts, action: ProductAction) {
    
    if (action.type === FETCH_SUCCESS_PRODUCTS) {
        const productService = new ProductService(action.payload.data);
        const data: Product[] = productService.updateDataFromCart(state.cart);

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