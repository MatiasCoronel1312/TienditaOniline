import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";



export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        height: 85,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.secondary,        
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 5,
        
        
    },
    headerContainer: {

    },
    
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        //flex: 1,
    },
    date: {
        fontSize: 14,
        fontFamily: 'kalamR'
    },
    total: {
        fontSize: 18,
        fontFamily: 'kalamR'
    },

});