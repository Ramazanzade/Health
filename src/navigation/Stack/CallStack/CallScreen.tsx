import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Call from '../../../component/Message/Call';
const Stack = createNativeStackNavigator();
const CallScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Call" component={Call} />
        </Stack.Navigator>
    )
}

export default CallScreen