import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
export const styles = StyleSheet.create({
    container: {
        flex:1,
   
    },
    listContainer: {
        flex: 1,
    },
    footer : {

        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.primary,
        paddingVertical: 10,
    },
    Confirm : {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    textButtonConfirm : {
        fontSize: 19,
        fontFamily: 'kalamB',
    },
    totalContainer : {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTotal : {
        fontSize: 16,
        fontFamily: 'kalamR',
    },
    total : {
        fontSize: 19,
        fontFamily: 'kalamB',
    },
})