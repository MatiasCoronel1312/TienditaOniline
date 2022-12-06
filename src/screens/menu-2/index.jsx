import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Menu2 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plato secundario</Text>
            <Button
                title="Comidas"
                color={colors.primary}
                onPress={() => navigation.navigate('Comidas')}
            />
            <Button
                title="Categories"
                color={colors.primary}
                onPress={() => navigation.navigate('Categories')}
            />
        </View>
    );
};

export default Menu2;