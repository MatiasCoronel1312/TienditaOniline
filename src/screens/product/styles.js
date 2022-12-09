import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        
        backgroundColor: colors.secondary,
    },
    content: {
        borderRadius:20,
        padding:5,
        margin:5,
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    title:{
        fontFamily: 'kalamB',
        fontSize: 22,
        color: colors.text,
    },
    img:{
        width:150,
        height: 150,
        borderRadius: 5,
        margin: 10,
    },
    price:{
        fontFamily: 'kalamB',
        fontSize: 22,
        color: colors.text,
        padding:10,
    },
    description:{
        fontFamily: 'kalamB',
        fontSize: 12,
        color: colors.text, 
        padding: 10,                                       
    },
    buttonContainer: {
        padding:10,
        borderRadius:5,
        marginTop:50,
    }
});