import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, Modal, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEnvelope, faLock, faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import loginstayle from '../Login/loginstayle';
const Register = ({ navigation }: any) => {
    const [emai, setemail] = useState('')
    const [paswword, setpaswword] = useState('')
    const [hideNumbers, setHideNumbers] = useState(false);
    const [hideText, setHideText] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [backgroundRed, setBackgroundRed] = useState(false);
    const [name, setname] = useState('')

    const handleToggleHideNumbers = () => {
        setHideNumbers(!hideNumbers);
        setHideText(!hideText);
    };
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setBackgroundRed(true);
            setSuccessModalVisible(true);
        }, 1000);
    };


    const closeSuccessModal = () => {
        setLoading1(true);
        setTimeout(() => {
          setSuccessModalVisible(false);
        setBackgroundRed(false)  
        navigation.navigate('LoginScreen')
 
        }, 1000);
       

    };

    return (
        <View style={[loginstayle.viewd, backgroundRed && { backgroundColor: '#b7b8bc' }]}>
            <View style={loginstayle.view}>
                <TouchableOpacity onPress={() => navigation.navigate('OnboardinScreen', { screen: 'Onboarding2' })}>
                    <FontAwesomeIcon icon={faChevronLeft} style={loginstayle.icon} size={25} />
                </TouchableOpacity>
                <Text style={loginstayle.text}>Sign Up</Text>
            </View>
            <View style={loginstayle.inputview}>
                <View>
                    <FontAwesomeIcon icon={faUser} style={loginstayle.icon1} size={25} />
                    <TextInput
                        onChangeText={setname}
                        value={name}
                        placeholder='Enter your name'
                        style={loginstayle.input1}
                    />
                </View>
                <View>
                    <FontAwesomeIcon icon={faEnvelope} style={loginstayle.icon1} size={25} />
                    <TextInput
                        onChangeText={setemail}
                        value={emai}
                        placeholder='Enter your email'
                        style={loginstayle.input1}
                    />
                </View>
                <View>
                    <FontAwesomeIcon icon={faLock} style={loginstayle.icon1} size={25} />
                    <TouchableOpacity onPress={handleToggleHideNumbers} style={loginstayle.toucicon}>
                        {hideNumbers
                            ? <FontAwesomeIcon icon={faEye} style={loginstayle.icon1} size={25} />
                            : <FontAwesomeIcon icon={faEyeSlash} style={loginstayle.icon1} size={25} />
                        }
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={setpaswword}
                        value={hideText ? paswword.replace(/./g, '*') : paswword}
                        placeholder='Enter your password'
                        style={loginstayle.input1}
                    />
                    <TouchableOpacity style={loginstayle.touc} >
                        <Text style={loginstayle.text1}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginstayle.toucview}>
                <TouchableOpacity style={loginstayle.touc1} onPress={handleLogin} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size='large' color="white" style={{ marginTop: '4%' }} />
                    ) : (
                        <Text style={loginstayle.text2}>Sign Up</Text>
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
                            <Text style={loginstayle.text7}>Success</Text>
                            <Text style={loginstayle.text10}>Your account has been successfully registered</Text>
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
                <View style={loginstayle.textview}>
                    <Text style={loginstayle.text4}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                        <Text style={loginstayle.text3}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginstayle.view4}>
                <View style={loginstayle.view2}></View>
                <Text style={loginstayle.text5}>OR</Text>
                <View style={loginstayle.view3}></View>
            </View>
            <View>
                <TouchableOpacity style={loginstayle.touc2}>
                    <Image
                        source={require('../../asset/imge/Google.png')}
                        style={loginstayle.img}
                    />
                    <Text style={loginstayle.text6}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginstayle.touc2}>
                    <Image
                        source={require('../../asset/imge/Apple.png')}
                        style={loginstayle.img1}
                    />
                    <Text style={loginstayle.text6}>Sign in with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginstayle.touc2}>
                    <Image
                        source={require('../../asset/imge/Facebook.png')}
                        style={loginstayle.img}
                    />
                    <Text style={loginstayle.text6}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register