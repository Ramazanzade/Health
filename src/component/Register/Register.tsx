import { View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faEnvelope, faLock, faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import loginstayle from '../Login/loginstayle';
import CheckBox from '@react-native-community/checkbox';
const Register = ({ navigation }: any) => {
    const [email, setemail] = useState<any>('')
    const [paswword, setpaswword] = useState<any>('')
    const [name, setname] = useState<any>('')
    const [emaierror, seteamilerror] = useState(false)
    const [paswworderror, setpaswworderror] = useState(false)
    const [nameerror, setnameerror] = useState(false)
    const [hideNumbers, setHideNumbers] = useState(false);
    const [hideText, setHideText] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [backgroundRed, setBackgroundRed] = useState(false);
    const [selected, setselected] = useState(false)
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [selectborde, setselectborde] = useState(false);
    const [hasContent, setHasContent] = useState<any>(false); 
    const [hasContent1, setHasContent1] = useState<any>(false); 
    const [hasContent2, setHasContent2] = useState<any>(false); 

    const handlePasswordChange = (text: string) => {
        setpaswword(text);
        setpaswworderror(text.trim() == '')
        setHasContent2(text.trim() !== ''); 

    };
    const handleEmailChange = (text: string) => {
        setemail(text);
        seteamilerror(text.trim() == '' || !/\S+@\S+\.\S+/.test(text))
        setHasContent1(text.trim() !== '');

    };
    const hendleNameChange = (text: string) => {
        setname(text);
        setnameerror(text.trim() == '')
        setHasContent(text.trim() !== ''); 

    };




    const handleToggleHideNumbers = () => {
        setHideNumbers(!hideNumbers);
        setHideText(!hideText);
    };

    const HandleSingup = () => {
        if (selected || emaierror == email || paswworderror == paswword || nameerror == name) {
            seteamilerror(true)
            setpaswworderror(true)
            setnameerror(true)
            setselectborde(true)

        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setBackgroundRed(true);
                setSuccessModalVisible(true);
            }, 2000);
        }

    };
    const toggleCheckbox = () => {
        setselected(!selected);
        setselectborde(false);
    };

    const SuccessModal = () => {
        setLoading1(true);
        setTimeout(() => {
            setSuccessModalVisible(false);
            setBackgroundRed(false)
            navigation.navigate('LoginScreen')
        }, 2000);


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
                    <FontAwesomeIcon icon={faUser} style={[loginstayle.icon1, hasContent && { color: '#199A8E' } ]} size={25} />
                    <TextInput
                        onChangeText={hendleNameChange}
                        value={name}
                        placeholder='Enter your name'
                        style={[loginstayle.input1, nameerror && { borderColor: 'red' }]}
                    />
                </View>
                <View>
                    <FontAwesomeIcon icon={faEnvelope} style={[loginstayle.icon1, hasContent1 && { color: '#199A8E' } ]} size={25} />
                    <TextInput
                        onChangeText={handleEmailChange}
                        value={email}
                        placeholder='Enter your email'
                        style={[loginstayle.input1, emaierror && { borderColor: 'red' }]}
                    />
                </View>
                <View>
                    <FontAwesomeIcon icon={faLock} style={[loginstayle.icon1, hasContent2 && { color: '#199A8E' } ]} size={25} />
                    <TouchableOpacity onPress={handleToggleHideNumbers} style={loginstayle.toucicon}>
                        {hideNumbers
                            ? <FontAwesomeIcon icon={faEye} style={[loginstayle.icon1, hasContent2 && { color: '#199A8E' }]} size={25} />
                            : <FontAwesomeIcon icon={faEyeSlash} style={[loginstayle.icon1, hasContent2 && { color: '#199A8E' }]} size={25} />
                        }
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={handlePasswordChange}
                        value={hideText ? paswword.replace(/./g, '*') : paswword}
                        placeholder='Enter your password'
                        style={[loginstayle.input1, paswworderror && { borderColor: 'red' }]}
                    />
                    <View style={loginstayle.touc9} >
                        <CheckBox
                            value={selected}
                            onValueChange={toggleCheckbox}
                            style={[loginstayle.checkbox]}
                        />
                        <Text style={[loginstayle.text11, selectborde && { color: 'red' }]}>I agree to the medidoc <Text style={[loginstayle.text12, selectborde && { color: 'red' }]}>Terms of Service</Text> and <Text style={[loginstayle.text12, selectborde && { color: 'red' }]}>Privacy Policy</Text></Text>
                    </View>
                </View>
            </View>
            <View style={loginstayle.toucview}>
                <TouchableOpacity style={loginstayle.touc1} onPress={HandleSingup} disabled={loading}>
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
                            <TouchableOpacity style={loginstayle.touc3} onPress={SuccessModal}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
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
                <TouchableOpacity style={loginstayle.touc10}>
                    <Image
                        source={require('../../asset/imge/Google.png')}
                        style={loginstayle.img}
                    />
                    <Text style={loginstayle.text6}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginstayle.touc10}>
                    <Image
                        source={require('../../asset/imge/Apple.png')}
                        style={loginstayle.img1}
                    />
                    <Text style={loginstayle.text6}>Sign in with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={loginstayle.touc10}>
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