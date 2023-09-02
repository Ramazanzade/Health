import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import forgotcss from './forgotcss';

const Verify = ({ navigation }: any) => {
    const [veriferror, setveriferror] = useState<any>(false);
    const [verif, setverif] = useState<string[]>(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [hasContent, setHasContent] = useState<boolean[]>([false, false, false, false]);

    const inputRefs = Array.from({ length: 4 }, () => useRef<TextInput>(null));

    useEffect(() => {
        if (hasContent.every((content) => content)) {
            Verify1();
        }
    }, [hasContent]);

    const handleInputChange = (text: string, index: number) => {
        const updatedVerif = [...verif];
        updatedVerif[index] = text;
        setverif(updatedVerif);
        const updatedHasContent = [...hasContent];
        updatedHasContent[index] = text.length > 0;
        setHasContent(updatedHasContent);

        if (text.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const Verify1 = () => {
        if (veriferror == verif.join('')) {
            setveriferror(true);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('CreatNewPassword')
            }, 2000);
        }
    };

    return (
        <View>
            <View style={forgotcss.iconview}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <FontAwesomeIcon icon={faChevronLeft} style={forgotcss.icon} size={25} />
                </TouchableOpacity>
            </View>
            <View style={forgotcss.textview}>
                <Text style={forgotcss.text1}>Enter Verification Code</Text>
                <Text style={[forgotcss.text2, { width: '70%' }]}>Enter code that we have sent to your number ***** </Text>
            </View>
            <View style={forgotcss.inputview}>
                {inputRefs.map((ref, index) => (
                    <TextInput
                        key={index}
                        ref={ref}
                        style={[
                            forgotcss.input,
                            veriferror && { borderColor: 'red' },
                            hasContent[index] && { borderColor: '#199A8E' },
                        ]}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleInputChange(text, index)}
                        value={verif[index]}
                    />
                ))}
            </View>
            <View style={forgotcss.toucv}>
                <TouchableOpacity style={[forgotcss.touc, { width: '90%', marginHorizontal: '5%' }]} onPress={Verify1}>
                    {loading ? (
                        <ActivityIndicator size="large" color="white" style={{ marginTop: '4%' }} />
                    ) : (
                        <Text style={forgotcss.text3}>Verify</Text>
                    )}
                </TouchableOpacity>
            </View>
            <View style={forgotcss.textview2}>
                <Text style={forgotcss.text4}>Didn’t receive the code?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={forgotcss.text5}>Resend</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Verify;
