import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import doctorcss from './doctorcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import {faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { doctoraction } from '../../store/feature/doctorSlice';

const DoctorDetail = ({ navigation }: any) => {
    const item = useSelector((state: any) => state.doctorReducer.value)
    const [showFullText, setShowFullText] = useState(false);
    const [selectedDay, setSelectedDay] = useState<any>(null);
    const [selectedId, setSelectedId] = useState<any>(null);
    const date = useSelector((state: any) => state.OclockReducer.value)
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const currentDate = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysOfWeek = [];

    for (let i = 0; i < 7; i++) {
        const dayOfMonth = currentDate.getDate() + i;
        daysOfWeek.push(`${dayNames[i]}        ${dayOfMonth}`);

    }

    const renderitem = (item: any) => {
        const isSelected = item.id === selectedId;
        return (
            <TouchableOpacity
                style={[
                    doctorcss.touch,
                    { backgroundColor: isSelected ? '#199A8E' : 'white' },
                ]}
                onPress={() => handleItemClick(item.id)}
            >
                <Text style={doctorcss.text9}>{item.date}</Text>
            </TouchableOpacity>
        );
    };

    const handleItemClick = (itemId: any) => {
        setSelectedId(itemId);
    };
    const dispatch = useDispatch()
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        dispatch(doctoraction(item));
        setLocalData(item)
    }, []);
    const handleclick=(item: any)=>{
        dispatch(doctoraction(item));
        navigation.navigate('Appointment')
    }

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
                            ... Read more
                        </Text>
                    )}
                </Text>
            </View>
            <ScrollView style={doctorcss.dateview} horizontal={true}>
                {daysOfWeek.map((day, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            doctorcss.datetouc,
                            selectedDay === index ? { backgroundColor: '#199A8E' } : null,
                            index >= currentDate.getDay() ? null : { backgroundColor: 'red' }, // Red background for previous days

                        ]}
                        onPress={() => {
                            if (index >= currentDate.getDay()) {
                                setSelectedDay(index);
                            }
                        }}
                    >
                        <Text style={doctorcss.text5}>{day}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={doctorcss.view8}></View>
            <View>
                <FlatList
                    data={date}
                    renderItem={({ item }) => renderitem(item)}
                    keyExtractor={(item: any) => item.id.toString()}
                    style={doctorcss.flatlist}
                    numColumns={3}
                />
            </View>
            <View style={doctorcss.view9}>
                <TouchableOpacity style={doctorcss.touc1}>
                    <FontAwesomeIcon icon={faCommentDots} style={doctorcss.icon1} size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={doctorcss.touc2} onPress={handleclick}>
                    <Text style={doctorcss.text10}>Book Apointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DoctorDetail