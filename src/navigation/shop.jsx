
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Categories, Bebidas,  Comidas, Menu1, Menu2, Gaseosa } from "../screens";


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{headerTitleAlign:'center'}}
        >
            <Stack.Screen 
                name="Categories" 
                component={Categories}
               // options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Comidas" 
                component={Comidas}
                //options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Bebidas" 
                component={Bebidas}
                options={{headerShown:true}}
            />
            <Stack.Screen 
                name="Menu1" 
                component={Menu1}
                options={{headerShown:true}}
            />
            <Stack.Screen 
                name="Menu2" 
                component={Menu2}
                options={{headerShown:true}}
            />
            <Stack.Screen 
                name="Gaseosa" 
                component={Gaseosa}
                options={{headerShown:true}}
            />
        </Stack.Navigator>
    );
};

export default ShopNavigator;