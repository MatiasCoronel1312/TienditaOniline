import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        
        backgroundColor: colors.background,
    },
    containerList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    title:{
        fontFamily: 'kalamB',
        fontSize: 22,
        color: colors.text,
    }
});