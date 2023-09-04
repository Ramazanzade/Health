import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import doctorcss from './doctorcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar} from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { doctoraction } from '../../store/feature/doctorSlice';
import { useRoute } from '@react-navigation/native';

const Appointment = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.doctorReducer.value)
    const route = useRoute<any>();
    const { selectedDay, selectedTime } = route.params;
    const price= data.detail.consultation
    const free = 1
    const total = free + price
    // console.log(price);
    
    return (
        <View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('DoctorDetail')} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Appointment</Text>
            </View>
            <View style={[doctorcss.view7, {marginTop:'2%'}]}>
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
                        <View style={doctorcss.view5}>
                            <FontAwesomeIcon icon={faStar} style={doctorcss.icon4} size={20} />
                            <Text style={doctorcss.text7}>{data.detail.star}</Text>
                        </View>
                        <View style={doctorcss.view6}>
                            <FontAwesomeIcon icon={faLocationDot} style={doctorcss.icon5} size={20} />
                            <Text style={doctorcss.text8}>{data.detail.loction}</Text>
                        </View>
                    </View>
                </View>
            </View>
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
                    <Text style={[doctorcss.text13,{marginLeft:'15%'}]}>{data.category}</Text> 
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
                    <Text style={[doctorcss.text15, {color:'#101623'}]}>Total</Text>
                    <Text style={[doctorcss.text16,{color:'#199A8E', fontSize:25}]}>{total}$</Text>
                </View>
            </View>
            <View style={doctorcss.view8}></View>
        </View>
    )
}

export default Appointment