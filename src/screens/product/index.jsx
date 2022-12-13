import React from "react";
import { View, Text, Button,Image } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useSelector } from "react-redux";


const Product = ({navigation }) => {
    const product = useSelector((state) => state.products.selected);
    
    const {title, price, image, description } = product || {};

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