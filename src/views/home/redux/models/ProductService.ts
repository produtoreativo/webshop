import { Product, ProductList } from "./ProductModel";

export default class ProductService {

    products: ProductList = { data: [] as Product[] };
    

    constructor(data: Product[]) {
        this.products.data = data;
    }

    updateDataFromCart = () => {
        const data: Product[] = this.products.data.map((product: Product) => {
            product.qty = 1;
            product.price = product.price_0_1 as unknown as string;
            return product;
        })

        return data;

    }

}