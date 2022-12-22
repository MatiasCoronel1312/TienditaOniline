import { useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, Button, TouchableOpacity } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const Auth = ({navigation }) => {
    const [ isLogin, setIsLogin ] = useState(true);
    const title = isLogin ? "Login" : 'Register';
    const message = isLogin ? "Don't you have an account?" : 'Do you have an account?';
    const messageAction = isLogin ? 'Login' : 'Register';
    return (
        <KeyboardAvoidingView
            style={styles.keyboardContainer}
            behavior='padding'
            enabled>
            <View style= {styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='enter your email'
                    placeholderTextColor={colors.secondary}
                    keyboardType='email-address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={() => {}}
                    />
                    
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder='enter your password'
                    placeholderTextColor={colors.secondary}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={() => {}}
                    />
                <Button color={colors.secondary} title={messageAction} onPress={() => {null}}/>
                <View style={styles.prompt}>
                    <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.promptMessage}>{message}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Auth;