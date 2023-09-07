import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Arcticles from '../../../component/Derman/Arcticles';
import Pharmacy from '../../../component/Derman/Pharmacy';
import DrugsDetail from '../../../component/Derman/DrugsDetail';
import MyCart from '../../../component/Derman/MyCart';
const Stack = createNativeStackNavigator();
const DermanScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Arcticles" component={Arcticles} />
    <Stack.Screen name="Pharmacy" component={Pharmacy} />
    <Stack.Screen name="DrugsDetail" component={DrugsDetail} />
    <Stack.Screen name="MyCart" component={MyCart} />
</Stack.Navigator>
  )
}

export default DermanScreen