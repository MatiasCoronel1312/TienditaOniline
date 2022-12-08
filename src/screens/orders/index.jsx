import React from "react";
import { View, Text, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { MenuOrders } from "../../constants/data";
import { styles } from "./styles";

const Orders = ({navigator}) => {
    const onDelete = (id) => {
        console.warn('Borrar',id);
    }
    const renderItem = ({item}) => <OrderItem item={item} onDelete={onDelete}/>
    return (
        <View style={styles.container}>
            <FlatList
                data={MenuOrders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}/>
        </View>
    )
};

export default Orders;