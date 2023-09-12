import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CallScreen from '../Stack/CallStack/CallScreen';
import MessageScreen1 from '../Stack/Message1Stack/MessageScreen1';
const Tab = createMaterialTopTabNavigator();
const Messagetabbar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 25 ,},
      tabBarStyle: { backgroundColor: '#E5E7EB', borderRadius:30,height:60, borderWidth:1,borderColor:'#A1A8B0' },
      tabBarActiveTintColor: '#199A8E',
      tabBarIndicatorStyle: { backgroundColor: 'transparent' }, 
    
    }}
    
  >
    <Tab.Screen name="CallScreen"  component={CallScreen} />
    <Tab.Screen name="MessageScreen1"  component={MessageScreen1} />
  </Tab.Navigator>
  )
}

export default Messagetabbar