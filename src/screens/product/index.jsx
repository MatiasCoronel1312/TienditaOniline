import React from "react";
import { View, Text, Button,Image } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";


const Product = ({navigation }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);
    
    const {title, price, image, description } = product || {};

    const onAddToCart = () => {
        dispatch(addToCart(product))
    }
    return (
        
        <View style={styles.container}> 
            <View style={styles.content}>
                <Text style={styles.price}>$ {price}</Text>
                <Text style={styles.description}>description</Text>     
                <Image source={{uri:image}} style={styles.img}/>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Add to Cart'
                        color={colors.primary}
                        onPress={onAddToCart}
                    />
                </View>
            </View> 
        </View>
    );
};

export default Product;