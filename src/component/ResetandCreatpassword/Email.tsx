import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import loginstayle from '../Login/loginstayle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import forgotcss from './forgotcss';
const Email = ({ navigation }: any) => {
    const [email, setemail] = useState<any>('')
    const [emaierror, seteamilerror] = useState(false)
    const [hasContent1, setHasContent1] = useState<any>(false);
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (text: string) => {
        setemail(text);
        seteamilerror(text.trim() === '' || !/\S+@\S+\.\S+/.test(text))
        setHasContent1(text.trim() !== '');

    };
    const Reset = async () => {
        if (emaierror == email) {
            seteamilerror(true);
        } else {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
    
                setLoading(false);
                // navigation.navigate('LoginScreen', { screen: 'Verify' });
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        }}
    return (
        <View>
            <FontAwesomeIcon icon={faEnvelope} style={[forgotcss.icon1, hasContent1 && { color: '#199A8E' }]} size={25} />
            <TextInput
                onChangeText={handleEmailChange}
                value={email}
                placeholder='Enter your email'
                style={[forgotcss.input1, emaierror && { borderColor: 'red' }]}
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

export default Email