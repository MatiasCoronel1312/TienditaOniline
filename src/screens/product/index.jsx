import React from "react";
import { View, Text, Button } from "react-native";

import { colors } from "../../constants/themes/colors";

import { MenuComidas } from "../../constants/data";
import { styles } from "./styles";
import { ProductItem } from "../../components";


const Product = ({navigation, route}) => {
    const { id } = route.params;
    const filteredFoodItem = MenuComidas.find((food) => food.id === id);
    const {title, price, image, description } = filteredFoodItem || {};
    //console.warn(filteredFoodItem);
    console.warn(route.params)
    return (
        
        <View style={styles.container}> 
            <Text style={styles.title}>{route.params.title}</Text> 
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.description}>description</Text>     
            {console.warn(price)}
            <Button
                title="Categories"
                color={colors.primary}
                onPress={() => navigation.navigate('Categories')}
            />
        </View>
    );
};

export default Product;