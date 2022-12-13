import React from "react";
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
//import { MenuCategory } from "../../constants/data";
import { MenuItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../store/actions";

const Categories = ({navigation}) => {
    const dispatch = useDispatch();
    const categoriesMenu = useSelector((state) => state.category.categories);
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {title: item.title})
    };
    const renderItem = ({item}) => <MenuItem item={item} onSelected={onSelected}/>
    return (            
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>MenuCategories</Text>
            <FlatList
                data={categoriesMenu}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default Categories;