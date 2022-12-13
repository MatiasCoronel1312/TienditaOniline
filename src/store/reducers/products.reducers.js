import { MenuComidas } from "../../constants/data";
import { productsTypes } from "../types";

const { FilterProducts, SelectProduct } = productsTypes;
const initialState = {
    products: MenuComidas,
    filteredProducts: [],
    selected: null
}

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SelectProduct:
            return {
                ...state,
                selected: state.products.find((product) => product.id === action.productId),
            };
        case FilterProducts:    
            return {
                ...state,
                filteredProducts: state.products.filter((product) => product.categoryId === action.categoryId),
            };
        default:
            return state;
    };
    
};

export default productsReducers;