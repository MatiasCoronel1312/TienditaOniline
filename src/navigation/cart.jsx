import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { Cart } from "../screens";
import { colors } from "../constants/themes/colors";
const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.secondary},
                headerTitleAlign:'center',
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'kalamB',
                },

            }}>
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
    );
} ;

export default CartNavigator;