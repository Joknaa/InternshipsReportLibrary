import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './src/screens/auth/login/loginScreen';
import feedScreen from './src/screens/feed/feedScreen';
import AddDocumentScreen from './src/screens/AddDocument/AddDocumentScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          style={styles.container}
          name="Add Document"
          component={AddDocumentScreen} />
        <Stack.Screen
          style={styles.container}
          name="Reports List"
          component={feedScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
