import { URL_API } from "../../constants/firebase";
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



export const ConfirmCart = (items, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch (`${URL_API}/orders.json` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items,
                    total,
                }),
            });

            const result = await response.json(); 

            dispatch({
                type: Confirm_Order,
                result,
            });
        } catch (error) {
            dispatch ({
                type: Confirm_Order,
                error,
            });
        }
    };
};