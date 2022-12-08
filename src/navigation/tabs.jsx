import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Ionicons } from '@expo/vector-icons';
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrderNavigator from "./orders";
import { colors } from "../constants/themes/colors";

const BottonTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <BottonTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown:false,
            }}>
            <BottonTab.Screen 
                name='ShopTab' 
                component={ShopNavigator}
                options={{
                    title: 'Menu',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons  
                            name={ focused? 'restaurant' : 'restaurant-outline'}
                            size={22}
                            color={colors.primary}/>
                    )
                }}/>
            <BottonTab.Screen 
                name='OrderTab'
                component={OrderNavigator}
                options={{
                    title: 'Orden',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons  
                            name={ focused? 'file-tray-full-sharp' : 'file-tray-full-outline'}
                            size={22}
                            color={colors.primary}/>
                    )
                }}/>
            <BottonTab.Screen 
                name='CartTab' 
                component={CartNavigator}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons  
                            name={ focused? 'cart' : 'cart-outline'}
                            size={22}
                            color={colors.primary}/>
                    )
                }}/>
        </BottonTab.Navigator>
    )
};

export default Tabs;