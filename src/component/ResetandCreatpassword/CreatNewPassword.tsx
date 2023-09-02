import { View, TouchableOpacity, Text, TextInput, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEye, faEyeSlash, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import forgotcss from './forgotcss';
import loginstayle from '../Login/loginstayle';

const CreatNewPassword = ({ navigation }: any) => {
    const [password, setPassword] = useState<any>('');
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<any>(false);
    const [hasContent2, setHasContent2] = useState<any>(false);
    const [password1, setPassword1] = useState<any>('');
    const [passwordVisible1, setPasswordVisible1] = useState<boolean>(false);
    const [passwordError1, setPasswordError1] = useState<any>(false);
    const [hasContent1, setHasContent1] = useState<any>(false);
    const [loading, setLoading] = useState(false);
    const [backgroundRed, setBackgroundRed] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [loading1, setLoading1] = useState(false);

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        setPasswordError(text.trim() === '');
        setHasContent2(text.trim() !== '');

    };
    const handlePasswordChange1 = (text: string) => {
        setPassword1(text);
        setPasswordError1(text.trim() === '');
        setHasContent1(text.trim() !== '');

    };
    const togglePasswordVisibility1 = () => {
        setPasswordVisible1(!passwordVisible1);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const Creat = () => {
        if (passwordError == password || passwordError1 == password1) {
            setPasswordError(true)
            setPasswordError1(true)

        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setBackgroundRed(true);
                setSuccessModalVisible(true);
            }, 2000);
        }
    }
    const closeSuccessModal = () => {
        setLoading1(true);
        setTimeout(() => {
            setSuccessModalVisible(false);
            setBackgroundRed(false)
            navigation.navigate('Login')
        }, 2000);
    };
    return (
        <View style={[{ flex: 1 }, backgroundRed && { backgroundColor: '#b7b8bc' }]}>
            <View style={forgotcss.iconview}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <FontAwesomeIcon icon={faChevronLeft} style={forgotcss.icon} size={25} />
                </TouchableOpacity>
            </View>
            <View style={forgotcss.textview}>
                <Text style={forgotcss.text1}>Create New Password</Text>
                <Text style={[forgotcss.text2, { width: '80%' }]}>Create your new password to login </Text>
            </View>
            <View>
                <FontAwesomeIcon icon={faLock} style={[loginstayle.icon1, hasContent2 && { color: '#199A8E' }]} size={25} />
                <TouchableOpacity onPress={togglePasswordVisibility} style={loginstayle.toucicon}>
                    {passwordVisible ? (
                        <FontAwesomeIcon icon={faEye} style={[loginstayle.icon1, hasContent2 && { color: '#199A8E' }]} size={25} />
                    ) : (
                        <FontAwesomeIcon icon={faEyeSlash} style={[loginstayle.icon1, hasContent2 && { color: '#199A8E' }]} size={25} />
                    )}
                </TouchableOpacity>
                <TextInput
                    onChangeText={handlePasswordChange}
                    value={password}
                    placeholder='Enter your password'
                    style={[loginstayle.input1, passwordError && { borderColor: 'red' }]}
                />
            </View>
            <View>
                <FontAwesomeIcon icon={faLock} style={[loginstayle.icon1, hasContent1 && { color: '#199A8E' }]} size={25} />
                <TouchableOpacity onPress={togglePasswordVisibility1} style={loginstayle.toucicon}>
                    {passwordVisible1 ? (
                        <FontAwesomeIcon icon={faEye} style={[loginstayle.icon1, hasContent1 && { color: '#199A8E' }]} size={25} />
                    ) : (
                        <FontAwesomeIcon icon={faEyeSlash} style={[loginstayle.icon1, hasContent1 && { color: '#199A8E' }]} size={25} />
                    )}
                </TouchableOpacity>
                <TextInput
                    onChangeText={handlePasswordChange1}
                    value={password1}
                    placeholder='Enter your password'
                    secureTextEntry={!passwordVisible1}
                    style={[loginstayle.input1, passwordError1 && { borderColor: 'red' }]}
                />
            </View>
            <TouchableOpacity style={[loginstayle.touc1, { marginTop: '10%' }]} onPress={Creat} disabled={loading}>
                {loading ? (
                    <ActivityIndicator size='large' color="white" style={{ marginTop: '5%' }} />
                ) : (
                    <Text style={loginstayle.text2}>Create Password</Text>
                )}
            </TouchableOpacity>
            <Modal
                visible={successModalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={loginstayle.modal}>
                    <View style={loginstayle.view5}>
                        <View style={loginstayle.iconview}>
                            <FontAwesomeIcon icon={faCheck} style={loginstayle.icon3} size={55} />
                        </View>
                    </View>
                    <View style={loginstayle.textview1}>
                        <Text style={[loginstayle.text7, { fontSize: 25 }]}>Success</Text>
                        <Text style={[loginstayle.text8, { alignSelf: 'center', textAlign: 'center', fontSize: 20 }]}>You have successfully reset your password.</Text>
                    </View>
                    <View style={loginstayle.toucview1}>
                        <TouchableOpacity style={loginstayle.touc3} onPress={closeSuccessModal}>
                            {loading1 ? (
                                <ActivityIndicator size='small' color="white" style={{ marginTop: '10%' }} />
                            ) : (
                                <Text style={loginstayle.text9}>Login</Text>)}
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default CreatNewPassword;
