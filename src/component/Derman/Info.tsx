import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faStethoscope, faMagnifyingGlass, faVirusCovid, faLungs, faTooth, faBrain, faSyringe, faHeartCircleBolt, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import homecss from '../Home/homecss';
import dermancss from './dermancss';
import { ScrollView } from 'react-native-virtualized-view';
const Info = ({ navigation }: any) => {
    const items = useSelector((state: any) => state.dermanproductReducer.value)
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Arcticles')} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Info</Text>
            </View>
            <View style={dermancss.imgview1}>
                <Image
                source={items.imge}
                style={dermancss.imge1}
                />
            </View>
            <View style={dermancss.textview3}>
                <Text style={dermancss.text5}>{items.name}</Text>
            </View> 
            <View style={dermancss.textview4}>
                <Text style={dermancss.text6}>{items.price} - <Text style={dermancss.text7}>{items.red}</Text></Text>
            </View>
            <ScrollView style={dermancss.textview5}>
                <Text style={dermancss.text8}>{items.description}</Text>
            </ScrollView>
        </ScrollView>
    )
}

export default Info