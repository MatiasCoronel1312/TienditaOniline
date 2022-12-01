import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

const Menu1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plato principal</Text>
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

export default Menu1;