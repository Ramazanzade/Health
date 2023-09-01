import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Phone from '../../../component/ResetandCreatpassword/Phone';
const Stack = createNativeStackNavigator();
const PhoneScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Phone" component={Phone} />
</Stack.Navigator>
  )
}

export default PhoneScreen