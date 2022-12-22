import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
export const styles = StyleSheet.create({
    container: {
        width : '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.background,

    },
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    
    
    title : {
        fontSize: 19,
        fontFamily: 'kalamB',
        marginVertical: 10,
        textAlign: 'center',
    },
    label : {
        fontSize: 14,
        fontFamily: 'kalamR',
        marginVertical: 5,
        
    },
    input : {
        height: 45,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'kalamR',
        marginBottom: 20,
        backgroundColor: colors.white,
        padding: 5,
        borderRadius: 5,
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    promptButton: {
        backgroundColor: colors.background,
        borderColor: colors.primary,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    promptMessage: {
        fontSize: 14,
        colos: colors.text,
        fontFamily: 'kalamR'
    }
    
})