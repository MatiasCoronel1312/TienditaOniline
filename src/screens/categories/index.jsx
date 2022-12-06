import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <Button
                title="Bebidas"
                color={colors.primary}
                onPress={() => navigation.navigate('Bebidas')}
            />
            <Button
                title="Comidas"
                color={colors.primary}
                onPress={() => navigation.navigate('Comidas')}
            />
        </View>
    );
};

export default Categories;