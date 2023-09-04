import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import doctorcss from './doctorcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { doctoraction } from '../../store/feature/doctorSlice';
import { useRoute } from '@react-navigation/native';

const Appointment = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.doctorReducer.value)
    const route = useRoute<any>();
    const { selectedDay, selectedTime } = route.params;
    return (
        <View>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('DoctorDetail')} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Appointment</Text>
            </View>
            <View style={doctorcss.view7}>
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

            <View>
                <View>
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </View>
                <View>
                    <Text>{selectedDay.dayOfMonth}</Text> 
                    <Text>{selectedDay.month}</Text>
                    <Text>{selectedDay.year}</Text>
                    <Text>{selectedTime.toString()}</Text>
                </View>
            </View>
        </View>
    )
}

export default Appointment