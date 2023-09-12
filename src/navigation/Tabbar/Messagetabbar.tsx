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
                tabBarLabelStyle: { fontSize: 25, marginTop:3 },
                tabBarStyle: { backgroundColor: '#E8F3F1', borderRadius:5, height: 60, borderWidth: 0.5, borderColor: '#A1A8B0' },
                tabBarActiveTintColor: '#199A8E',
                tabBarIndicatorStyle: { backgroundColor: 'transparent' },

            }}

        >
            <Tab.Screen name="All" component={MessageScreen1} />
            <Tab.Screen name="Call" component={CallScreen} />
        </Tab.Navigator>
    )
}

export default Messagetabbar