import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { colors } from "../../constants/themes/colors";
import { formatDate } from "../../utils";

const OrderItem = ({item, onDelete}) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
                <Text style={styles.header}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>${item.total}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={22} color={colors.primary} />
                </TouchableOpacity>
                
            </View>
        </View>
    )
};

export default OrderItem;