import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";



export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        height: 125,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        margin: 10,
    },
    headerContainer: {

    },
    header: {
        fontSize: 20,
        fontFamily: 'kalamB',
        color: colors.text,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    quantity: {
        fontSize: 14,
        fontFamily: 'kalamR'
    },
    price: {
        fontSize: 18,
        fontFamily: 'kalamR'
    },

});