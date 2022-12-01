import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import AppNavigator from './navigation';
import { Categories, Bebidas, Comidas } from './screens';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    'kalamR': require('../assets/fonts/Kalam-Regular.ttf'),
    'kalamB': require('../assets/fonts/Kalam-Bold.ttf'),
    'kalamL': require('../assets/fonts/Kalam-Light.ttf'),
  });

  if(!loaded) {
    
      return (
      <View style={styles.container}>
        <ActivityIndicator color='#8A0808' size={'large'}/>
      </View>
              )
  }

  return (
    <AppNavigator/>
  );
}


const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


