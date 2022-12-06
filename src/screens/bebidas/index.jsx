import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Bebidas = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bebidas</Text>
            <Button
                title="Gaseosa"
                color={colors.primary}
                onPress={() => navigation.navigate('Gaseosa')}
            />
            <Button
                title="Categories"
                color={colors.primary}
                onPress={() => navigation.navigate('Categories')}
            />
        </View>
    );
};

export default Bebidas;