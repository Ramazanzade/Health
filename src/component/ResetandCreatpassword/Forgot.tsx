import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import forgotcss from './forgotcss';
import Fogettabbar from '../../navigation/Tabbar/Fogettabbar';
const Forgot = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={forgotcss.iconview}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <FontAwesomeIcon icon={faChevronLeft} style={forgotcss.icon} size={25} />
                </TouchableOpacity>
            </View>
            <View style={forgotcss.textview}>
                <Text style={forgotcss.text1}>Forgot Your Password?</Text>
                <Text style={forgotcss.text2}>Enter your email or your phone number, we will send you confirmation code</Text>
            </View>
            <View style={forgotcss.toucview}>
                <Fogettabbar></Fogettabbar>
            </View>
        </View>
    )
}

export default Forgot