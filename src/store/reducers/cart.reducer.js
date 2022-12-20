import { sumaTotal } from "../../utils";
import { cartTypes } from "../types";
const { Add_To_Cart, Remove_To_Cart, Confirm_Order } = cartTypes;


const initialState = {
    items: [],
    total: 0,
}

const cartReducer = ( state = initialState, action) => {
    switch(action.type){
        case Add_To_Cart:
            let updatedCart = [];
            if (state.items.find((item) => item.id === action.item.id)) {
                updatedCart = state.items.map((item) => {
                    if (item.id === action.item.id) item.quantity += 1;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1};
                updatedCart = [...state.items, item ];
            }
            return {
                ...state,
                items: updatedCart,
                total: sumaTotal(updatedCart),
            }
    default:
        return state;
    }
}

export default cartReducer;