import { MenuCategory } from "../../constants/data";
import { categoryTypes } from "../types";

const { SelectCategory } = categoryTypes;

const initialState = {
    categories: MenuCategory,
    selected: null
}

const categoryReducers = (state = initialState, action) => {
    switch (action.type) {
        case SelectCategory:
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.categoryId
            );
            if(indexCategory==-1) return state;
            return {
                ...state,
                selected: state.categories[indexCategory]
            };
        default:
            return state;
    }
}

export default categoryReducers;