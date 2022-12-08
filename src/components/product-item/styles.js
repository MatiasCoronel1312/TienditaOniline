import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 120,
        
    },

    title:{
        fontFamily: 'kalamR',
        fontSize: 22,
        color: colors.text,
    },
    item:{
        flex: 1,
        justifyContent: 'center',

    },
    detailContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price:{
        fontSize: 18,
        fontFamily: 'kalamB',
    },
});