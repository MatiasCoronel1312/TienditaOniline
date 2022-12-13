import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import AppNavigator from './navigation';

import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './store';

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
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}


const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


