import React from "react";
import { View, Text, Button,Image } from "react-native";

import { colors } from "../../constants/themes/colors";

import { MenuComidas } from "../../constants/data";
import { styles } from "./styles";
import { ProductItem } from "../../components";


const Product = ({navigation, route}) => {
    const { categoryId } = route.params;
    const filteredFoodItem = MenuComidas.find((food) => food.id === categoryId);
    const {title, price, image, description } = filteredFoodItem || {};

    return (
        
        <View style={styles.container}> 
            <View style={styles.content}>
                <Text style={styles.price}>$ {price}</Text>
                <Text style={styles.description}>description</Text>     
                <Image source={{uri:image}} style={styles.img}/>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Categories"
                        color={colors.primary}
                        onPress={() => navigation.navigate('Categories')}
                    />
                </View>
            </View> 
        </View>
    );
};

export default Product;