import { Product, ProductList } from "./ProductModel";

export default class ProductService {

    products: ProductList = { data: [] as Product[] };
    

    constructor(data: Product[]) {
        this.products.data = data;
    }

    updateDataFromCart = (cart: ShopCart.Cart) => {
        const data: Product[] = this.products.data.map((product: Product) => {
            product.qty = 1;
            product.price = product.price_0_1 as unknown as string;
            product.addedToCart = !!cart.products.data.filter(p => p.id == product.id)[0];
            return product;
        })

        return data;

    }

}