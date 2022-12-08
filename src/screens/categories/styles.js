import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    title:{
        fontFamily: 'kalamB',
        fontSize: 22,
        color: colors.text,
    },
    containerList:{
        
        width:'100%',
        height: 20,
        },
});