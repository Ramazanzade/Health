import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from '../../../component/Message/Message';
const Stack = createNativeStackNavigator();
const MessageScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Message" component={Message} />
</Stack.Navigator>
  )
}

export default MessageScreen