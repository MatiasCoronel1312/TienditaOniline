import { cartTypes } from "../types";

const { Add_To_Cart, Remove_To_Cart, Confirm_Order } = cartTypes;

export const addToCart = (item) => ({
    type: Add_To_Cart,
    item,
});

export const RemoveToCart = (id) => ({
    type: Remove_To_Cart,
    id,
});

export const ConfirmOrder = (order) => ({
    type: Confirm_Order,
    order,
});