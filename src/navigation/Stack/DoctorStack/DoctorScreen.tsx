import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopDoctor from '../../../component/Doctor/TopDoctor';
import FindDoctors from '../../../component/Doctor/FindDoctors';
import DoctorDetail from '../../../component/Doctor/DoctorDetail';
import Appointment from '../../../component/Doctor/Appointment';
const Stack = createNativeStackNavigator();
const DoctorScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="TopDoctor" component={TopDoctor} />
    <Stack.Screen name="FindDoctors" component={FindDoctors} />
    <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
    <Stack.Screen name="Appointment" component={Appointment} />
</Stack.Navigator>
  )
}

export default DoctorScreen