import { ordersTypes } from "../types";

const { Get_Orders, Delete_Order } = ordersTypes;

const initialState = {
    list: [],

};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Get_Orders:
            return {
                ...state,
                list: action.orders,
            };
        case Delete_Order:
            return {
                ...state,
                list: state.list.filter((order) => order.id !== action.id),
            }
        default:
            return state;
    }
};

export default orderReducer;