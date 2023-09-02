import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../component/Login/Login';
import Forgot from '../../../component/ResetandCreatpassword/Forgot';
import Email from '../../../component/ResetandCreatpassword/Email';
import Phone from '../../../component/ResetandCreatpassword/Phone';
import Verify from '../../../component/ResetandCreatpassword/Verify';
import CreatNewPassword from '../../../component/ResetandCreatpassword/CreatNewPassword';

const Stack = createNativeStackNavigator();
const LoginScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="Verify" component={Verify} />
            <Stack.Screen name="CreatNewPassword" component={CreatNewPassword} />
        </Stack.Navigator>
  )
}

export default LoginScreen