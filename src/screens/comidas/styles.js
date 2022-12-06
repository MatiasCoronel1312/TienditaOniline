import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    containerList:{
        
        width:'100%',
        height: 20,
        },
    title:{
        fontFamily: 'kalamB',
        fontSize: 22,
        color: colors.text,
    }
});