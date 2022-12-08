import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { ProductItem } from "../../components";
import { MenuComidas } from "../../constants/data";

import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Products = ({navigation, route}) => {
    const {categoryId, color} = route.params;
    const onSelected = (item) => {
        navigation.navigate('Product', {categoryId: item.id, title: item.title})
    };
    const filteredCategoryFood = MenuComidas.filter( food => food.categoryId === categoryId);
    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected} />
    console.warn(filteredCategoryFood);
    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                data={filteredCategoryFood}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id.toString()}
                style={styles.containerList}
            />
            <Button
                title="Categories"
                color={colors.primary}
                onPress={() => navigation.navigate('Categories')}
            />
        </SafeAreaView>
    );
};

export default Products;