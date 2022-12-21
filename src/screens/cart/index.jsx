import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MenuCart } from "../../constants/data";
import { CartItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmCart,  RemoveToCart } from "../../store/actions";

const Cart = ({navigator}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const onDelete = (id) => {        
            dispatch(RemoveToCart(id))
    };
    const onCreateOrder = () => {
        dispatch(ConfirmCart(cart, total));
    };
    

    const keyExtractor = (item) => item.id.toString();
    const renderItem = ({item}) => (
        <CartItem item={item} onDelete={onDelete}/>
    )
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    style={styles.listContainer}
                    keyExtractor={keyExtractor}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity disabled={cart.length === 0} style={cart.length === 0? styles.buttonDisabledConfirm: styles.Confirm} onPress={onCreateOrder}>
                    <Text style={styles.textButtonConfirm}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotal} >Total</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;