import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image  } from 'react-native';
import { HomeScreen } from './home';
import { SettingsScreen } from './settings';
import { namedQuery } from 'firebase/firestore';


const Tab = createBottomTabNavigator();

export function Tabs ({}) {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ }) => {
  
              const icons = {
                Home : require('../assets/home.png'),
                MyCards : require('../assets/myCards.png'),
                Statistics : require('../assets/statictics.png'),
                Settings : require('../assets/settings.png'),
            }
              return <Image source={icons[route.name]} style={styles.icon} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="MyCards" component={''} options={{ headerShown: false }}/>
        <Tab.Screen name="Statistics" component={''} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      color: 'red'
    },
  });