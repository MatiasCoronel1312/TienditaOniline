import React from "react";
import { TouchableOpacity, View, Text  } from "react-native";
import { styles } from "./styles";

const ProductItem = ( { item, onSelected }) => {
    return (
        <View style={{...styles.container, backgroundColor:item.color}}>
            <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.price}>${item.price}</Text>                    
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ProductItem;