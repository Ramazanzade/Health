import { View, Text, TextInput , TouchableOpacity, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import loginstayle from '../Login/loginstayle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import forgotcss from './forgotcss';
const Phone = ({navigation}:any) => {
    const [phone, setphone] = useState<any>('')
    const [phoneerror, setphoneerror] = useState(false)
    const [hasContent1, setHasContent1] = useState<any>(false); 
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (text: string) => {
        setphone(text);
        setphoneerror(text.trim() === '' )
        setHasContent1(text.trim() !== '');

    };
    const Reset =()=>{
        if ( phoneerror == phone) {
            setphoneerror(true)

        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('LoginScreen',{screen:'Verify'})
            }, 2000);

        }
    }
    return (
        <View>
            <FontAwesomeIcon icon={faPhone} style={[forgotcss.icon1, hasContent1 && { color: '#199A8E' }]} size={25} />
            <TextInput
                onChangeText={handleEmailChange}
                value={phone}
                placeholder='Enter your phone'
                style={[forgotcss.input1, phoneerror && { borderColor: 'red' }]}
                keyboardType='numeric'
            />

            <View style={forgotcss.toucv}>
            <TouchableOpacity style={forgotcss.touc} onPress={Reset}>
            {loading ? (
                        <ActivityIndicator size='large' color="white" style={{ marginTop: '4%' }} />
                    ) : (
                        <Text style={forgotcss.text3}>Reset Password</Text>
                        )}
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Phone