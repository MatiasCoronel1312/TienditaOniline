import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { MenuItem } from "../../components";
import { MenuComidas } from "../../constants/data";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Comidas = ({navigation}) => {
    const onSelected = (item) => {
        console.warn('onSelected', item);
    };
    const renderItem = ({item}) => <MenuItem item={item} onSelected={onSelected}/>
    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList
                data={MenuComidas}
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

export default Comidas;