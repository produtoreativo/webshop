export type Product = {
    id: string,
    name: string,
    price: string,
    qty?: number,
}

export type ProductList = {
    data: Product[]
}
