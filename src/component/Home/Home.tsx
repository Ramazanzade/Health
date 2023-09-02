import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faStethoscope, faKitMedical, faTruckMedical, faStar } from '@fortawesome/free-solid-svg-icons';
import homecss from './homecss';
import { useSelector } from 'react-redux';
const Home = () => {
    const [search, setsearch] = useState('')
    const item = useSelector((state: any) => state.reclamReducer.value)
    const data = useSelector((state: any) => state.doctorReducer.value)
    const renderitem = (item: any) => {
        return (
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
        )
    }

    const renderItem = (data: any) => {
        return (
            <TouchableOpacity style={homecss.touc2}>
                <View style={homecss.view5}>
                    <Image
                        source={data.detail.imge}
                        style={homecss.imge}
                    />
                </View>
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
                        <FontAwesomeIcon icon={faStar} style={homecss.icon5} size={10} />
                        <Text style={homecss.text8}>{data.detail.loction}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
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
                    <TouchableOpacity style={homecss.touc}>
                        <FontAwesomeIcon icon={faStethoscope} style={homecss.icon3} size={40} />
                    </TouchableOpacity>
                    <Text style={homecss.text1}>Doctor</Text>
                </View>
                <View>
                    <TouchableOpacity style={homecss.touc}>
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
                    data={item}
                    renderItem={({ item }) => renderitem(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    style={homecss.flatlist}
                    horizontal={true}
                />
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default Home