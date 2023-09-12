import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import callcss from './messagecss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo, faPhone, faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Call = () => {
    const data = useSelector((state: any) => state.doctorReducer.value)
    const renderitem = (data: any) => {
        return (
            <TouchableOpacity style={callcss.touc1}>
                <View style={callcss.view2}>
                    <View style={callcss.imgview1}>
                        <Image
                            source={data.detail.imge}
                            style={callcss.img1}
                        />
                    </View>
                    <View style={callcss.text3}>
                        <Text style={callcss.nametext1}>{data.detail.name}</Text>
                        <View style={callcss.view2}>
                            {data.detail.gəlib ? (
                                <FontAwesomeIcon icon={faRightLong} color='#199A8E'  size={20} />
                            ) : (
                                <FontAwesomeIcon icon={faLeftLong} color='#199A8E' size={20} />
                            )
                            }
                            <Text style={callcss.datetext}>{data.detail.date}</Text>
                        </View>
                    </View>
                </View>
                <View style={callcss.text4}>
                    {data.detail.call ? (
                        <FontAwesomeIcon icon={faPhone} color='#199A8E'  size={20} />
                    ) : (
                        <FontAwesomeIcon icon={faVideo} color='#199A8E'  size={20} />
                    )
                    }
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => renderitem(item)}
                keyExtractor={(item: any) => item.id.toString()}
            />
        </View>
    )
}

export default Call