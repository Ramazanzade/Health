import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from '../../../component/Message/Message';
import Call from '../../../component/Message/Call';
import MessageSend from '../../../component/Message/MessageSend';
import MessageHome from '../../../component/Message/MessageHome';
const Stack = createNativeStackNavigator();
const MessageScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="MessageHome" component={MessageHome} />
      <Stack.Screen name="MessageSend" component={MessageSend} />
    </Stack.Navigator>
  )
}

export default MessageScreen