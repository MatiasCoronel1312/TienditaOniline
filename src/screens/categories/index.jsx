import React from "react";
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { MenuCategory } from "../../constants/data";
import { MenuItem } from "../../components";

const Categories = ({navigation, route}) => {
    const onSelected = (item) => {
        navigation.navigate('Products', {categoryId: item.id, title: item.title})
    };
    const renderItem = ({item}) => <MenuItem item={item} onSelected={onSelected}/>
    return (            
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>MenuCategories</Text>
            <FlatList
                data={MenuCategory}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default Categories;