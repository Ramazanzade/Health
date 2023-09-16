import { View, Text, TouchableOpacity, ScrollView, Image, TextInput , FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faStethoscope, faMagnifyingGlass, faVirusCovid, faLungs, faTooth, faBrain, faSyringe, faHeartCircleBolt, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import homecss from '../Home/homecss';
import dermancss from './dermancss';
import { dermanaction } from '../../store/feature/dermanSlice';
import { dermanproducr } from '../../store/feature/dermanproductSlice';
const Arcticles = ({ navigation }: any) => {
    const [search, setsearch] = useState('')
    const items = useSelector((state: any) => state.dermanproductReducer.value)
    const dispatch = useDispatch()
    const renderitem2 = (items: any) => {
        return (
            <TouchableOpacity style={dermancss.touc}>
                <Text style={dermancss.text}>{items.category}</Text>
            </TouchableOpacity>
        )
    }
    const handlepress = (items:any)=>{
        dispatch(dermanproducr(items));
        navigation.navigate('Info')
    }
    const handlepress1 = (items:any)=>{
        dispatch(dermanproducr(items));
        navigation.navigate('Info')
    }
    const renderitem3 = (items: any) => {
        return (
            <TouchableOpacity style={dermancss.touc1} onPress={()=>handlepress(items)}>
                <View style={dermancss.imgview}>
                    <Image
                        source={items.imge}
                        style={dermancss.imge}
                    />
                </View>
                <View style={dermancss.textview}>
                    <View style={dermancss.textview1}>
                        <Text style={dermancss.text1}>{items.category}</Text>
                    </View>
                    <Text style={dermancss.text2}>{items.name}</Text>
                </View>
                <View style={dermancss.textview2}>
                    <Text style={dermancss.text3}>{items.price} - <Text style={dermancss.text4}>{items.red}</Text></Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderitem4 = (items: any) => {
        return (
            <TouchableOpacity style={homecss.touc3} onPress={()=>handlepress1(items)}>
                <View style={homecss.view11}>
                    <Image
                        source={items.imge}
                        style={homecss.img1}
                    />
                </View>
                <View style={homecss.view12}>
                    <Text style={homecss.text11}>{items.name}</Text>
                    <Text style={homecss.text12}>{items.price} - <Text style={homecss.text13}>{items.red}</Text></Text>
                </View>
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
           <ScrollView>
           <View>
                <Text style={[doctorcss.text19, { marginTop: '5%' }]}>Popular Articles</Text>
                <FlatList
                    data={items}
                    renderItem={({ item }) => renderitem2(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={[homecss.view10, { marginTop: '3%', marginBottom: '-2%' }]}>
                    <Text style={homecss.text9}>Trending Articles</Text>
                </View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => renderitem3(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={homecss.view10}>
                    <Text style={homecss.text9}>Related Articles</Text>
                </View>
                <FlatList
                    data={items}
                    renderItem={({ item }) => renderitem4(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    // horizontal={true}
                    style={homecss.flatlist1}
                />
            </View>
           </ScrollView>
        </View>
    )
}

export default Arcticles