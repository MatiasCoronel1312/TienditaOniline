import { URL_API } from "../../constants/firebase";
import { ordersTypes } from "../types";

const { Get_Orders, Delete_Order } = ordersTypes;

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const response = await fetch (`${URL_API}/orders.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();

            const orders = Object.keys(data).map((key) => ({
                ...data[key],
                id: key,
            }));

            dispatch({
                type: Get_Orders,
                orders,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const deleteOrder = (id) => {
    return async (dispatch) => {
        try{
            const response = await fetch(`${URL_API}/orders/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();

            dispatch({
                type: Delete_Order,
                id,
            })
        } catch (error) {
            console.log(error);
        }
    }
}