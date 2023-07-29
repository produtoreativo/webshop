export type Product = {
    id: string,
    name: string,
    price: string,
    qty?: number,
    price_0_1: number,
    addedToCart: boolean,
}

export type ProductList = {
    data: Product[]
}

