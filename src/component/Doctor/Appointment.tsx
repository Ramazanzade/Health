import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import doctorcss from './doctorcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { doctoraction } from '../../store/feature/doctorSlice';
import { useRoute } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import loginstayle from '../Login/loginstayle';
const Appointment = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.doctorReducer.value)
    const [selected, setSelected] = useState<any>("");
    const [cardNumber, setCardNumber] = useState<any>('');
    const [expirationDate, setExpirationDate] = useState<any>('');
    const [cvv, setCvv] = useState<any>('');
    const [cardNumbererror, setCardNumbererror] = useState(false);
    const [expirationDateerror, setExpirationDateerror] = useState(false)
    const [cvverror, setCvverror] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const handlecart = (text: string) => {
        setCardNumber(text)
        setCardNumbererror(text.trim() === '')
    }
    const handleexpir = (text: string) => {
        setExpirationDate(text)
        setExpirationDateerror(text.trim() === '')
    }
    const handlecvv = (text: string) => {
        setCvv(text)
        setCvverror(text.trim() === '')
    }
    const data1 = [
        { key: '1', value: 'VISA' },
        { key: '2', value: 'MASTER PAY' },
    ]
    const route = useRoute<any>();
    const { selectedDay, selectedTime } = route.params;
    const price = data.detail.consultation
    const free = 1
    const total = free + price

    const handelbook = () => {
        if (cardNumbererror == cardNumber || cvverror == cvv || expirationDateerror == expirationDate) {
            setCardNumbererror(true)
            setExpirationDateerror(true)
            setCvverror(true)

        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSuccessModalVisible(true);
            }, 2000);
        }
    }
    const closeSuccessModal = () => {
        setLoading1(true);
        setTimeout(() => {
            setSuccessModalVisible(false);
            navigation.navigate('Tabbar', { screen: 'HomeScreen' })
        }, 2000);
    };


    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('DoctorDetail')} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Appointment</Text>
            </View>
            <View style={[doctorcss.view7, { marginTop: '2%' }]}>
                <View style={doctorcss.view1}>
                    <Image
                        source={data.detail.imge}
                        style={doctorcss.img}
                    />
                </View>
                <View style={doctorcss.view2}>
                    <View style={doctorcss.view3}>
                        <Text style={doctorcss.text1}>{data.detail.name}</Text>
                        <Text style={doctorcss.text2}>{data.category}</Text>
                    </View>
                    <View style={doctorcss.view4}>
                        <View style={[doctorcss.view5, { width: '50%' }]}>
                            <FontAwesomeIcon icon={faStar} style={[doctorcss.icon4, { marginLeft: '5%', marginRight: '-9%' }]} size={20} />
                            <Text style={doctorcss.text7}>{data.detail.star}</Text>
                        </View>
                        <View style={doctorcss.view6}>
                            <FontAwesomeIcon icon={faLocationDot} style={doctorcss.icon5} size={20} />
                            <Text style={doctorcss.text8}>{data.detail.loction}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={doctorcss.view10}>
                    <Text style={doctorcss.text11}>Date</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorDetail')}>
                        <Text style={doctorcss.text12}>Change</Text>
                    </TouchableOpacity>
                </View>

                <View style={doctorcss.view11}>
                    <View style={doctorcss.view12}>
                        <FontAwesomeIcon icon={faCalendarDays} style={doctorcss.icon2} size={30} />
                    </View>
                    <View style={doctorcss.view13}>
                        <Text style={doctorcss.text13}> {selectedDay.dayName}   {selectedDay.dayOfMonth}/{selectedDay.month}/{selectedDay.year}</Text>
                        <Text style={doctorcss.text14}>| {selectedTime.toString()}</Text>
                    </View>
                </View>
                <View style={doctorcss.view8}></View>
                <View style={doctorcss.view10}>
                    <Text style={doctorcss.text11}>Reason</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('FindDoctors')}>
                        <Text style={doctorcss.text12}>Change</Text>
                    </TouchableOpacity>
                </View>
                <View style={doctorcss.view11}>
                    <View style={doctorcss.view12}>
                        <FontAwesomeIcon icon={faPenToSquare} style={doctorcss.icon2} size={30} />
                    </View>
                    <View style={doctorcss.view13}>
                        <Text style={[doctorcss.text13, { marginLeft: '15%' }]}>{data.category}</Text>
                    </View>
                </View>
                <View style={doctorcss.view8}></View>
                <View style={doctorcss.view10}>
                    <Text style={doctorcss.text11}>Payment Detail</Text>
                </View>
                <View style={doctorcss.view14}>
                    <View style={doctorcss.view15}>
                        <Text style={doctorcss.text15}>Consultation</Text>
                        <Text style={doctorcss.text16}>{data.detail.consultation}$</Text>
                    </View>
                    <View style={doctorcss.view15}>
                        <Text style={doctorcss.text15}>Admin Fee</Text>
                        <Text style={doctorcss.text16}>{free}$</Text>
                    </View>
                    <View style={doctorcss.view15}>
                        <Text style={doctorcss.text15}>Aditional Discount</Text>
                        <Text style={doctorcss.text16}> - </Text>
                    </View>
                    <View style={doctorcss.view15}>
                        <Text style={[doctorcss.text15, { color: '#101623' }]}>Total</Text>
                        <Text style={[doctorcss.text16, { color: '#199A8E', fontSize: 25 }]}>{total}$</Text>
                    </View>
                </View>
                <View style={doctorcss.view8}></View>
                <View style={doctorcss.view10}>
                    <Text style={doctorcss.text11}>Payment Method</Text>
                </View>
                <View style={doctorcss.selectview}>
                    <SelectList
                        setSelected={(val: any) => setSelected(val)}
                        data={data1}
                    />
                </View>
                <View style={doctorcss.view17}>
                    <TextInput
                        onChangeText={handlecart}
                        value={cardNumber}
                        placeholder='Card Number'
                        style={[doctorcss.input, cardNumbererror && { borderColor: 'red' }]}
                        maxLength={16}
                        keyboardType='numeric'

                    />
                    <View style={doctorcss.view16}>
                        <TextInput
                            onChangeText={handleexpir}
                            value={expirationDate}
                            placeholder='Expiration'
                            style={[doctorcss.input1, expirationDateerror && { borderColor: 'red' }]}
                            maxLength={16}
                            keyboardType='numeric'

                        />
                        <TextInput
                            onChangeText={handlecvv}
                            value={cvv}
                            placeholder='CVV'
                            style={[doctorcss.input1, cvverror && { borderColor: 'red' }]}
                            maxLength={3}
                            keyboardType='numeric'

                        />
                    </View>
                </View>
            </ScrollView>
            <View style={doctorcss.view9}>
                <TouchableOpacity style={[doctorcss.touc1, { backgroundColor: '#ffffff', marginTop: '1%' }]}>
                    <Text style={doctorcss.text17}>Total</Text>
                    <Text style={doctorcss.text18}>{total}$</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[doctorcss.touc2, { width: '60%' }]} onPress={handelbook}>
                    {loading ? (
                        <ActivityIndicator size='large' color="white" style={{ marginTop: '4%' }} />
                    ) : (<Text style={doctorcss.text10}>Booking</Text>)}
                </TouchableOpacity>
            </View>
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
                        <Text style={loginstayle.text7}>Payment Success</Text>
                        <Text style={loginstayle.text8}>Your payment has been successful, you can have a consultation session with your trusted doctor</Text>
                    </View>
                    <View style={loginstayle.toucview1}>
                        <TouchableOpacity style={loginstayle.touc3} onPress={closeSuccessModal}>
                            {loading1 ? (
                                <ActivityIndicator size='small' color="white" style={{ marginTop: '10%' }} />
                            ) : (<Text style={loginstayle.text9}>Chat Doctor</Text>)}

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Appointment