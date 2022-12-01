import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

const Comidas = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comidas</Text>
            <Button
                title="Menu1"
                color={colors.primary}
                onPress={() => navigation.navigate('Menu1')}
            />
            <Button
                title="Menu2"
                color={colors.primary}
                onPress={() => navigation.navigate('Menu2')}
            />
            <Button
                title="Categories"
                color={colors.primary}
                onPress={() => navigation.navigate('Categories')}
            />
        </View>
    );
};

export default Comidas;