import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Email from '../../../component/ResetandCreatpassword/Email';
const Stack = createNativeStackNavigator();
const EmailScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Email" component={Email} />
        </Stack.Navigator>
    )
}

export default EmailScreen