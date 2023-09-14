import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEarthOceania, faHome, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import HomeScreen from '../Stack/HomeStack/HomeScreen';
import MessageScreen from '../Stack/MessageStack/MessageScreen';
import CalendarScreen from '../Stack/CalendarStack/CalendarScreen';
import LocationScreen from '../Stack/LocationStack/LocationScreen';
import tabbarcss from './tabbarcss';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

const Tab = createBottomTabNavigator();

const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: IconDefinition | undefined;
          if (route.name === 'HomeScreen') {
            iconName = faHome;
          } else if (route.name === 'MessageScreen') {
            iconName = faEnvelope;
          } else if (route.name === 'CalendarScreen') {
            iconName = faBasketShopping;
          } else if (route.name === 'LocationScreen') {
            iconName = faUser;
          }

          const iconColor = focused ? "#306B60" : "gray";
          const icon = iconName || faEarthOceania; 

          return <FontAwesomeIcon icon={icon} style={tabbarcss.tabIcon} size={35} color={iconColor} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MessageScreen" component={MessageScreen} />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen name="LocationScreen" component={LocationScreen} />
    </Tab.Navigator>
  );
}

export default Tabbar;
