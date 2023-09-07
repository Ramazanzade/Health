import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faStethoscope, faMagnifyingGlass, faVirusCovid, faLungs, faTooth, faBrain, faSyringe, faHeartCircleBolt, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import homecss from '../Home/homecss';
import dermancss from './dermancss';
const Arcticles = ({ navigation }: any) => {
    const [search, setsearch] = useState('')
    const items = useSelector((state: any) => state.dermanproductReducer.value)
    const renderitem2 = (items: any) => {
        return (
            <TouchableOpacity style={dermancss.touc}>
                <Text style={dermancss.text}>{items.category}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'HomeScreen' })} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Arcticles</Text>
            </View>
            <View style={homecss.inputview}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={homecss.icon2} size={25} />
                <TextInput
                    onChangeText={setsearch}
                    value={search}
                    style={homecss.input}
                    placeholder='Search doctor, drugs, articles...'
                />
            </View>
            <View>
                <Text style={[doctorcss.text19, { marginTop: '5%' }]}>Popular Articles</Text>
                <FlatList
                data={items}
                renderItem={({item})=>renderitem2(item)}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal={true}                />
            </View>
        </View>
    )
}

export default Arcticles