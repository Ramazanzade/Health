import { View, Text, TouchableOpacity, Modal, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboard, faHeart, faCreditCard, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight, faExclamation, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import locetioncss from './locetioncss';
import loginstayle from '../Login/loginstayle';

const Location = ({ navigation }: any) => {
  const data = useSelector((state: any) => state.doctorReducer.value)
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const handle =()=>{
    setSuccessModalVisible(true);

  }
  const closeSuccessModal = () => {
    setLoading1(true);
    setTimeout(() => {
      setSuccessModalVisible(false);
      navigation.navigate('Tabbar', { screen: 'HomeScreen' })
    }, 2000);
  };

  return (
    <View style={{ backgroundColor: '#66DED4', flex: 1 }}>
      <View style={locetioncss.view}>
        <Image
          source={require('../../asset/imge/111.png')}
          style={locetioncss.imge}
        />
        <Text style={locetioncss.text}>Ramazanzade Nizam</Text>
      </View>
      <View style={locetioncss.view1}>
        <TouchableOpacity style={locetioncss.touc}>
          <View style={locetioncss.view3}>
            <View style={locetioncss.view2}>
              <FontAwesomeIcon icon={faHeart} style={locetioncss.icon} size={30} />
            </View>
            <Text style={locetioncss.text1}> My Saved</Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} style={locetioncss.icon1} size={20} />
        </TouchableOpacity>
        <View style={locetioncss.view4}></View>
        <TouchableOpacity style={locetioncss.touc}>
          <View style={[locetioncss.view3, { marginRight: '28%' }]}>
            <View style={locetioncss.view2}>
              <FontAwesomeIcon icon={faClipboard} style={locetioncss.icon} size={30} />
            </View>
            <Text style={locetioncss.text1}>Appointmnet</Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} style={locetioncss.icon1} size={20} />
        </TouchableOpacity>
        <View style={locetioncss.view4}></View>
        <TouchableOpacity style={locetioncss.touc}>
          <View style={[locetioncss.view3, { marginRight: '13%' }]}>
            <View style={locetioncss.view2}>
              <FontAwesomeIcon icon={faCreditCard} style={locetioncss.icon} size={30} />
            </View>
            <Text style={locetioncss.text1}>Payment Method</Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} style={locetioncss.icon1} size={20} />
        </TouchableOpacity>
        <View style={locetioncss.view4}></View>
        <TouchableOpacity style={locetioncss.touc}>
          <View style={[locetioncss.view3, { marginRight: '50%' }]}>
            <View style={[locetioncss.view2, { marginLeft: '13%' }]}>
              <FontAwesomeIcon icon={faCommentDots} style={locetioncss.icon} size={30} />
            </View>
            <Text style={locetioncss.text1}>FAQs</Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} style={locetioncss.icon1} size={20} />
        </TouchableOpacity>
        <View style={locetioncss.view4}></View>
        <TouchableOpacity style={locetioncss.touc}  onPress={handle}>
          <View style={[locetioncss.view3, { marginRight: '43%' }]}>
            <View style={[locetioncss.view2, { marginLeft: '12%' }]}>
              <FontAwesomeIcon icon={faExclamation} style={[locetioncss.icon]} color='red' size={30} />
            </View>
            <Text style={[locetioncss.text1, { marginBottom: '35%', color: 'red' }]}>Logout</Text>
          </View>
          <FontAwesomeIcon icon={faChevronRight} style={locetioncss.icon1} size={20} />
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
              <FontAwesomeIcon icon={faArrowRightFromBracket} style={loginstayle.icon3} size={55} />
            </View>
          </View>
          <View style={loginstayle.textview1}>
            <Text style={loginstayle.text7}></Text>
            <Text style={loginstayle.text8}>Are you sure to log out of your account?</Text>
          </View>
          <View style={loginstayle.toucview1}>
            <TouchableOpacity style={loginstayle.touc3} onPress={closeSuccessModal}>
              {loading1 ? (
                <ActivityIndicator size='small' color="white" style={{ marginTop: '10%' }} />
              ) : (<Text style={loginstayle.text9}>Log Out</Text>)}

            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Location