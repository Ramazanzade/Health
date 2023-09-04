import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import doctorcss from './doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
const TopDoctor = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.doctorReducer.value)
    const dispatch = useDispatch()
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        dispatch(doctoraction(data));
        setLocalData(data)
    }, []);
    const handlePress = (data: any) => {
        dispatch(doctoraction(data));
        navigation.navigate('DoctorDetail')
      };
    const renderitem = (data: any) => {
        return (
            <TouchableOpacity style={doctorcss.touc} onPress={()=>handlePress(data)}>
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
            </TouchableOpacity>
        )
    }

    return (
        <View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'HomeScreen' })} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Top Doctor</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => renderitem(item)}
                keyExtractor={(item: any) => item.id.toString()}
            />
        </View>
    )
}

export default TopDoctor