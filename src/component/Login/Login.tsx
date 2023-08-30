import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginstayle from './loginstayle';
const Login = ({ navigation }: any) => {
    const [emai, setemail] = useState('')
    const [paswword, setpaswword] = useState('')
    const [hideNumbers, setHideNumbers] = useState(false);
    const [hideText, setHideText] = useState(true);
    const handleToggleHideNumbers = () => {
        setHideNumbers(!hideNumbers);
        setHideText(!hideText);
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={loginstayle.view}>
                <TouchableOpacity onPress={() => navigation.navigate('OnboardinScreen', { screen: 'Onboarding2' })}>
                    <FontAwesomeIcon icon={faChevronLeft} style={loginstayle.icon} size={25} />
                </TouchableOpacity>
                <Text style={loginstayle.text}>Login</Text>
            </View>
            <View style={loginstayle.inputview}>
                <FontAwesomeIcon icon={faEnvelope} style={loginstayle.icon1} size={25} />
                <TextInput
                    onChangeText={setemail}
                    value={emai}
                    placeholder='Enter your email'
                    style={loginstayle.input}
                />
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
                        style={loginstayle.input}
                    />
                    <TouchableOpacity style={loginstayle.touc} >
                        <Text style={loginstayle.text1}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={loginstayle.toucview}>
                <TouchableOpacity style={loginstayle.touc1}>
                    <Text style={loginstayle.text2}>Login</Text>
                </TouchableOpacity>
                <View style={loginstayle.textview}>
                    <Text style={loginstayle.text4}>Don’t have an account?</Text>
                    <TouchableOpacity>
                        <Text style={loginstayle.text3}>Sign Up</Text>
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

export default Login