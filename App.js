import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './src/screens/auth/login/loginScreen';
import homeScreen from './src/screens/home/homeScreen';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={homeScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    /*<SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="orange"
        onPress={
          () => console.log("Button Pressed")
        } />
    </SafeAreaView>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
