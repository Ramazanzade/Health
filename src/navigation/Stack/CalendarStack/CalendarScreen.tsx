import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from '../../../component/Calendar/Calendar';
const Stack = createNativeStackNavigator();
const CalendarScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Calendar" component={Calendar} />
</Stack.Navigator>
  )
}

export default CalendarScreen