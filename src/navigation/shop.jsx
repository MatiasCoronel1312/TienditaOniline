
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Categories,  Products, Product } from "../screens";


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerTitleAlign:'center'
            }}
        >
            <Stack.Screen 
                name="Categories" 
                component={Categories}
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Products" 
                component={Products}
                options={({ route }) => ({ title: route.params.title,})}
            />
            
            <Stack.Screen 
                name="Product" 
                component={Product}
                options={({ route }) => ({ title: route.params.title,})}
            />
            
            
        </Stack.Navigator>
    );
};

export default ShopNavigator;