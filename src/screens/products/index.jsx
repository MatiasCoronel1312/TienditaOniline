import React, { useEffect } from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../../components";

import { colors } from "../../constants/themes/colors";
import { filterProducts, selectProduct } from "../../store/actions";
import { styles } from "./styles";

const Products = ({navigation}) => {
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(filterProducts(category.id));
    }, []);
    
    const onSelected = (item) => {
        dispatch (selectProduct(item.id));
        navigation.navigate('Product', { title: item.title})
    };
    
    const renderItem = ({item}) => <ProductItem item={item} onSelected={onSelected} color={category.color}/>
    
    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                data={filteredProducts}
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