import React from "react";
import { View, Text, Button } from "react-native";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

const Gaseosa = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gaseosa</Text>
            <Button
                title="Bebidas"
                color={colors.primary}
                onPress={() => navigation.navigate('Bebidas')}
            />
            <Button
                title="Categories"
                color={colors.primary}
                onPress={() => navigation.navigate('Categories')}
            />
        </View>
    );
};

export default Gaseosa;