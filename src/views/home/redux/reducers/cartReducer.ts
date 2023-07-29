
import { GlobalAction } from "../../../../redux/actions";
import { ADD_TO_CART, REMOVE_FROM_CART, globalStateWithProducts } from "../actions/productsAction";
import { Product } from "../models/ProductModel";
import ProductService from "../models/ProductService";


interface ProductAction extends GlobalAction {
    payload: Product
}

function reducer(state: globalStateWithProducts, action: ProductAction) {
    
    if (action.type === ADD_TO_CART) {
        const product: Product = state.products.data.filter(p => p.id == action.payload.id)[0]
        const cart = state.cart;
        cart.products.data.push(product);
        cart.count = cart.products.data.length;

        const data: Product[] = state.products.data.map(p => {
            if (p.id == product.id) {
                p.addedToCart = true;
            }
            return p;
        });

        return {
            ...state,
            cart,
            products: {
                data,
            },
        }
    }

    if (action.type === REMOVE_FROM_CART) {
        const removedCart: ShopCart.Cart = state.cart
        const cartData: ShopCart.Product[] = removedCart.products.data.filter(p => (action.payload.id != p.id));
        removedCart.products.data = cartData;
        removedCart.count = removedCart.products.data.length;

        const productData: Product[] = state.products.data.map(p => {
            if (p.id == action.payload.id) {
                p.addedToCart = false;
            }
            return p;
        });

        return {
            ...state,
            cart: removedCart,
            products: {
                data: productData,
            },
        }
    }

    return state;
}

export default reducer;