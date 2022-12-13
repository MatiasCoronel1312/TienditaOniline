import { categoryTypes } from "../types";

const { SelectCategory} = categoryTypes;

export const selectCategory = (id) => ({
    type: SelectCategory,
    categoryId: id,
});

