import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import doctorcss from './doctorcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
const DoctorDetail = ({ navigation }: any) => {
    const item = useSelector((state: any) => state.doctorReducer.value)
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };
    return (
        <View>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'HomeScreen' })} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Doctor Detail</Text>
            </View>
            <View style={doctorcss.view7}>
                <View style={doctorcss.view1}>
                    <Image
                        source={item.detail.imge}
                        style={doctorcss.img}
                    />
                </View>
                <View style={doctorcss.view2}>
                    <View style={doctorcss.view3}>
                        <Text style={doctorcss.text1}>{item.detail.name}</Text>
                        <Text style={doctorcss.text2}>{item.category}</Text>
                    </View>
                    <View style={doctorcss.view4}>
                        <View style={doctorcss.view5}>
                            <FontAwesomeIcon icon={faStar} style={doctorcss.icon4} size={20} />
                            <Text style={doctorcss.text7}>{item.detail.star}</Text>
                        </View>
                        <View style={doctorcss.view6}>
                            <FontAwesomeIcon icon={faLocationDot} style={doctorcss.icon5} size={20} />
                            <Text style={doctorcss.text8}>{item.detail.loction}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={doctorcss.textview}>
                <Text style={doctorcss.text4}>About</Text>
                <Text style={doctorcss.text3}>
                    {showFullText ? item.detail.about : item.detail.about.substring(0, 100)}
                    {!showFullText && item.detail.about.length > 100 && (
                        <Text style={doctorcss.readMore} onPress={toggleText}>
                            Read more
                        </Text>
                    )}
                </Text>
            </View>
        </View>
    )
}

export default DoctorDetail