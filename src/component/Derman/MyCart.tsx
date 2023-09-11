import { View, Text, TouchableOpacity, ActivityIndicator, Image, TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import homecss from '../Home/homecss';
import dermancss from './dermancss';
import { dermanaction } from '../../store/feature/dermanSlice';
import StarRating from './StarRating';
import { SelectList } from 'react-native-dropdown-select-list'
import loginstayle from '../Login/loginstayle';
const MyCart = ({ navigation, initialQuantity }: any) => {
  const item2 = useSelector((state: any) => state.dermanReducer.value)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const price = item2.price
  const totalPrice = quantity * price;
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

const free=1
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


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={doctorcss.view}>
        <TouchableOpacity onPress={() => navigation.navigate('DrungsDetail')} >
          <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
        </TouchableOpacity>
        <Text style={doctorcss.text}>My Cart</Text>
      </View>
      <View style={[dermancss.view, { display: 'flex', flexDirection: 'row' }]}>
        <TouchableOpacity style={dermancss.touc2}>
          <Image
            source={item2.imge}
            style={dermancss.imge2}
          />
        </TouchableOpacity>
        <View style={{ marginTop: '10%' }}>
          <View style={dermancss.view1}>
            <Text style={dermancss.text9}>{item2.name}</Text>
            <Text style={dermancss.text10}>{item2.qram}</Text>
          </View>
          <View style={[dermancss.view2,{marginTop:10}]}>
            <TouchableOpacity onPress={handleDecrement} style={dermancss.touc4}>
              <Text style={[dermancss.text11,{color:'#ffffff', textAlign:'center' }]}>-</Text>
            </TouchableOpacity>
            <Text style={dermancss.text11}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrement}  style={dermancss.touc4}>
              <Text style={[dermancss.text11,{color:'#ffffff', textAlign:'center', marginBottom:10 }]}>+</Text>
            </TouchableOpacity>
            <Text style={dermancss.text11}>   ${totalPrice}</Text>
          </View>
        </View>
      </View>

      <View style={doctorcss.view10}>
                    <Text style={doctorcss.text11}>Payment Detail</Text>
                </View>
                <View style={doctorcss.view14}>
                    <View style={doctorcss.view15}>
                        <Text style={doctorcss.text15}>Consultation</Text>
                        <Text style={doctorcss.text16}> ${totalPrice}</Text>
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
                        <Text style={[doctorcss.text16, { color: '#199A8E', fontSize: 25 }]}>{totalPrice}$</Text>
                    </View>
                </View>
                <View style={doctorcss.view8}></View>
                <View style={doctorcss.view10}>
                    <Text style={doctorcss.text11}>Payment Method</Text>
                </View>
                <View style={doctorcss.selectview}>
                    <SelectList
                        setSelected={(val: any) => setSelected(val)}
                        data={item2}
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
            <View style={doctorcss.view9}>
                <TouchableOpacity style={[doctorcss.touc1, { backgroundColor: '#ffffff', marginTop: '1%' }]}>
                    <Text style={doctorcss.text17}>Total</Text>
                    <Text style={doctorcss.text18}>{totalPrice}$</Text>
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

export default MyCart