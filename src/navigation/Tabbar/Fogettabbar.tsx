import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Email from '../../component/ResetandCreatpassword/Email';
import Phone from '../../component/ResetandCreatpassword/Phone';
import EmailScreen from '../Stack/EmailStack/EmailScreen';
import PhoneScreen from '../Stack/PhoneStcak/PhoneScreen';


const Tab = createMaterialTopTabNavigator();
const Fogettabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 25 ,},
        tabBarStyle: { backgroundColor: '#E5E7EB', borderRadius:30,height:60, borderWidth:1,borderColor:'#A1A8B0' },
        tabBarActiveTintColor: '#199A8E',
        tabBarIndicatorStyle: { backgroundColor: 'transparent' }, 
      
      }}
      
    >
      <Tab.Screen name="Email"  component={EmailScreen} />
      <Tab.Screen name="Phone"  component={PhoneScreen} />
    </Tab.Navigator>
  )
}

export default Fogettabbar