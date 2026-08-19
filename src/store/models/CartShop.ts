/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

namespace ShopCart {

    export type Product = {
        id: string,
        name: string,
        price: string,
        qty?: number,
    }

    export type ProductList = {
        data: Product[]
    }

    export type Cart = {
        count: number,
        products: ProductList
    }
}

