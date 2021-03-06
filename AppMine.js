import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './src/screens/auth/login/loginScreen';
import feedScreen from './src/screens/feed/feedScreen';
import AddDocumentScreen from './src/screens/AddDocument/AddDocumentScreen';
import MoreInfo from './src/screens/MoreInfo/moreInfoScreen';
import Profile from './src/screens/profile/index';
import MainContainer from './src/components/general/container';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen style={styles.container} name="Feed" component={feedScreen} />
          <Stack.Screen style={styles.container} name="AddDocument" component={AddDocumentScreen} />
          <Stack.Screen style={styles.container} name="MoreInfo" component={MoreInfo} />
          <Stack.Screen style={styles.container} name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer> */}


      <MainContainer />
    </>
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
