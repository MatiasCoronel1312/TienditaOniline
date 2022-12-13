import { productsTypes } from "../types";

const { FilterProducts, SelectProduct } = productsTypes;

export const selectProduct = (id) => ({
    type: SelectProduct,
    productId: id,
});

export const filterProducts = (id) => ({
    type: FilterProducts,
    categoryId: id,
});