import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native'

import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faStethoscope, faKitMedical, faTruckMedical, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import homecss from './homecss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
const Home = ({ navigation }: any) => {
    const [search, setsearch] = useState('')
    const item1 = useSelector((state: any) => state.reclamReducer.value)
    const data = useSelector((state: any) => state.doctorReducer.value)
    const items = useSelector((state: any) => state.dermanproductReducer.value)

    const dispatch = useDispatch()

    const handleprees = (data: any) => {
        dispatch(doctoraction(data));
        navigation.navigate('DoctorScreen', { screen: 'DoctorDetail' })
    }
    const handleprees1 = (items: any) => {
        dispatch(doctoraction(items));
        navigation.navigate('DermanScreen', { screen: 'Arcticles' })
    }
    return (
        <View style={{ backgroundColor: '#FFFFFF'}}>
            <View style={homecss.view1}>
                <Text style={homecss.text}>Find your desire healt solution</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faBell} style={homecss.icon} size={35} />
                </TouchableOpacity>
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
            <View style={homecss.toucview}>
                <View>
                    <TouchableOpacity style={homecss.touc} onPress={() => navigation.navigate('DoctorScreen', { screen: 'FindDoctors' })}>
                        <FontAwesomeIcon icon={faStethoscope} style={homecss.icon3} size={40} />
                    </TouchableOpacity>
                    <Text style={homecss.text1}>Doctor</Text>
                </View>
                <View>
                    <TouchableOpacity style={homecss.touc} onPress={() => navigation.navigate('DermanScreen', { screen: 'Pharmacy' })}>
                        <FontAwesomeIcon icon={faKitMedical} style={homecss.icon3} size={40} />
                    </TouchableOpacity>
                    <Text style={homecss.text1}>Pharmacy</Text>
                </View>
                <View>
                    <TouchableOpacity style={homecss.touc}>
                        <FontAwesomeIcon icon={faNewspaper} style={homecss.icon3} size={40} />
                    </TouchableOpacity>
                    <Text style={homecss.text1}>News</Text>
                </View>
                <View>
                    <TouchableOpacity style={homecss.touc}>
                        <FontAwesomeIcon icon={faTruckMedical} style={homecss.icon3} size={40} />
                    </TouchableOpacity>
                    <Text style={homecss.text1}>Ambulance</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={item1}
                    renderItem={({ item }) => (
                        <View style={homecss.view2}>
                            <View style={homecss.view3} >
                                <Text style={homecss.text3}>{item.decripdion}</Text>
                                <TouchableOpacity style={homecss.touc1}>
                                    <Text style={homecss.text4}>Learn more</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={homecss.view4}>
                                <Image
                                    source={item.img}
                                    style={homecss.img}
                                />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item: any) => item.id.toString()}
                    style={homecss.flatlist}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={homecss.view10}>
                    <Text style={homecss.text9}>Top Doctor</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorScreen', { screen: 'TopDoctor' })}>
                        <Text style={homecss.text10}> See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>(         
               <TouchableOpacity style={homecss.touc2} onPress={() => handleprees(data)}>
                    <View style={homecss.view5}>
                        <Image
                            source={item.detail.imge}
                            style={homecss.imge}
                        />
                    </View>
                    <View style={homecss.view6}>
                        <Text style={homecss.text5}>{item.detail.name}</Text>
                        <Text style={homecss.text6}>{item.category}</Text>
                    </View>
                    <View style={homecss.view7}>
                        <View style={homecss.view8}>
                            <FontAwesomeIcon icon={faStar} style={homecss.icon4} size={10} />
                            <Text style={homecss.text7}>{item.detail.star}</Text>
                        </View>
                        <View style={homecss.view9}>
                            <FontAwesomeIcon icon={faLocationDot} style={homecss.icon5} size={10} />
                            <Text style={homecss.text8}>{item.detail.loction}</Text>
                        </View>
                    </View>
                </TouchableOpacity>)}
                    keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={homecss.view10}>
                    <Text style={homecss.text9}>Top Doctor</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DermanScreen', { screen: 'Arcticles' })}>
                        <Text style={homecss.text10}> See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={homecss.touc3} onPress={() => handleprees1(items)}>
                        <View style={homecss.view11}>
                            <Image
                                source={item.imge}
                                style={homecss.img1}
                            />
                        </View>
                        <View style={homecss.view12}>
                            <Text style={homecss.text11}>{item.name}</Text>
                            <Text style={homecss.text12}>{item.price} - <Text style={homecss.text13}>{item.red}</Text></Text>
                        </View>
                    </TouchableOpacity>
                    )}
                    keyExtractor={(item: any) => item.id.toString()}
                    style={homecss.flatlist1}
                />
            </View>
        </View>
    )
}

export default Home