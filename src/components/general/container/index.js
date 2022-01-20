import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from 'react-native-screens';

// Screens
import FeedScreen from '../../../screens/feed/feedScreen';
import AddDocumentScreen from '../../../screens/AddDocument/AddDocumentScreen';
import ProfileScreen from '../../../screens/profile';
import DocumentInfo from '../../../screens/MoreInfo/moreInfoScreen';

//Screen names
const homeName = "Feed";
const addDocumentName = "AddDocument";
const profileName = "Profile";
const documentInfoName = "MoreInfo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === addDocumentName) {
                            iconName = focused ? 'add' : 'add-outline';

                        } else if (rn === profileName) {
                            iconName = focused ? 'profile' : 'person-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 },
                }}>

                <Tab.Screen name={homeName} component={FeedScreen} />
                <Tab.Screen name={addDocumentName} component={AddDocumentScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />
                <Tab.Screen name={documentInfoName} component={DocumentInfo} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default MainContainer;


const styles = StyleSheet.create({
    Hidden: {
        display: 'none'
    }
})

