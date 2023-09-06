import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faStethoscope, faMagnifyingGlass, faVirusCovid, faLungs, faTooth, faBrain, faSyringe, faHeartCircleBolt, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import doctorcss from './doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import homecss from '../Home/homecss';

const FindDoctors = ({ navigation }: any) => {
    const [search, setsearch] = useState('')
    const data = useSelector((state: any) => state.doctorReducer.value)
    const dispatch = useDispatch()

    const handlepress1 = (data: any) => {
        dispatch(doctoraction(data));
        navigation.navigate('DoctorDetail')

    }
    const handlepress2 = (data: any) => {
        dispatch(doctoraction(data));
        navigation.navigate('DoctorDetail')

    }
    const renderItem = (data: any) => {
        return (
            <TouchableOpacity style={[homecss.touc2, { height: 220 }]} onPress={() => handlepress1(data)} >
                <View style={homecss.view5}>
                    <Image
                        source={data.detail.imge}
                        style={homecss.imge}
                    />
                </View>
                <View>
                    <View style={homecss.view6}>
                        <Text style={homecss.text5}>{data.detail.name}</Text>
                        <Text style={homecss.text6}>{data.category}</Text>
                    </View>
                    <View style={homecss.view7}>
                        <View style={homecss.view8}>
                            <FontAwesomeIcon icon={faStar} style={homecss.icon4} size={10} />
                            <Text style={homecss.text7}>{data.detail.star}</Text>
                        </View>
                        <View style={homecss.view9}>
                            <FontAwesomeIcon icon={faLocationDot} style={homecss.icon5} size={10} />
                            <Text style={homecss.text8}>{data.detail.loction}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const renderitem1 = (data: any) => {
        return (
            <TouchableOpacity style={doctorcss.view18} onPress={() => handlepress2(data)}>
                <Image
                    source={data.detail.imge}
                    style={homecss.imge}
                />
                <Text style={homecss.text5}>{data.detail.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'HomeScreen' })} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Find Doctor</Text>
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
                <Text style={doctorcss.text19}>Category</Text>
                <View style={[homecss.toucview, { marginTop: '2%' }]}>
                    <View>
                        <TouchableOpacity style={homecss.touc}>
                            <FontAwesomeIcon icon={faStethoscope} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>General</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={homecss.touc}>
                            <FontAwesomeIcon icon={faLungs} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>Lungs</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={homecss.touc}>
                            <FontAwesomeIcon icon={faTooth} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>Dentist</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={homecss.touc}>
                            <FontAwesomeIcon icon={faBrain} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>Psychiatrist</Text>
                    </View>
                </View>
                <View style={[homecss.toucview, { marginLeft: '-5%', marginTop: '1%' }]}>
                    <View style={{ marginRight: '-6%' }}>
                        <TouchableOpacity style={[homecss.touc]}>
                            <FontAwesomeIcon icon={faVirusCovid} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>Covid-19</Text>
                    </View>
                    <View style={{ marginLeft: '2%' }}>
                        <TouchableOpacity style={homecss.touc}>
                            <FontAwesomeIcon icon={faSyringe} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>Surgeon</Text>
                    </View>
                    <View style={{ marginRight: '15%' }}>
                        <TouchableOpacity style={homecss.touc}>
                            <FontAwesomeIcon icon={faHeartCircleBolt} style={homecss.icon3} size={40} />
                        </TouchableOpacity>
                        <Text style={homecss.text1}>Cardiologist</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={doctorcss.text19}>Recommended Doctors</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <View>
                <Text style={[doctorcss.text19, { marginTop: '1%' }]}>Your Recent Doctors</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderitem1(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default FindDoctors