import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splas from '../../../component/Splas/Splas';
const Stack = createNativeStackNavigator();
const SplasScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Splas" component={Splas} />
        </Stack.Navigator>
    )
}

export default SplasScreen