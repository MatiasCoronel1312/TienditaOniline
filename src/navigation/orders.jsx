import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { Orders } from "../screens";
import { colors } from "../constants/themes/colors";
const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.secondary},
                headerTitleAlign:'center',
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'kalamB',
                },
                
            }}>
            <Stack.Screen name='Orders' component={Orders}/>
        </Stack.Navigator>
    );
} ;

export default OrderNavigator;