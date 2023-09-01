import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import forgotcss from './forgotcss';
const Verify = ({ navigation }: any) => {
    const [color, setcolor] = useState(false)
    const [verif , setverif]=useState<any>('')

    const handleerror =(text:any)=>{
        setverif(text);
        setcolor(text.trim() === '' )
    }
    const inputRefs = Array.from({ length: 4 }, () => useRef<any>(null));

    const focusNextInput = (index: any) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
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
                        style={forgotcss.input}
                        keyboardType='numeric'
                        maxLength={1}
                        onChangeText={(text) => {
                            if (text.length === 1) {
                                focusNextInput(index);
                            }
                        }}
                        onSubmitEditing={() => {
                            if (index < inputRefs.length - 1) {
                                focusNextInput(index);
                            }
                        }}
                        value={verif}
                        
                    />
                ))}
            </View>
            <View></View>
            <View></View>


        </View>
    )
}

export default Verify