import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create ({
    container: {
       // flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 160,
    },
    contentContainer: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: 'kalamB',
        color: colors.text,
    },

});