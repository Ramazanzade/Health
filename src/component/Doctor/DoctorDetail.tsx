import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import doctorcss from './doctorcss'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { doctoraction } from '../../store/feature/doctorSlice';

const DoctorDetail = ({ navigation }: any) => {
    const data = useSelector((state: any) => state.doctorReducer.value)
    const date = useSelector((state: any) => state.OclockReducer.value)
    const [showFullText, setShowFullText] = useState(false);
    const [selectedDay, setSelectedDay] = useState<any>(null);
    const [selectedId, setSelectedId] = useState<any>(null);
    const [saat, setsaat] = useState<any>(null)
    const [localData, setLocalData] = useState([]);
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const daysOfWeek: any = [];
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December',
    ];
    for (let i = 0; i < 7; i++) {
        const dayOfWeekIndex = (currentDayOfWeek + i) % 7;
        const dayOfMonth = currentDayOfMonth + i;
        const month = currentMonth ;
        const year = currentYear;
        daysOfWeek.push({
            dayName: dayNames[dayOfWeekIndex],
            dayOfMonth,
            month,
            year
        });
    }


    const handleItemClick = ({ itemId, itemDate }: { itemId: any, itemDate: any }) => {
        setSelectedId(itemId);
        setsaat(itemDate);
    };
    const renderitem = (item: any) => {
        const isSelected = item.id === selectedId;
        return (
            <TouchableOpacity
                style={[
                    doctorcss.touch,
                    { backgroundColor: isSelected ? '#199A8E' : 'white' },
                ]}
                onPress={() => handleItemClick({ itemId: item.id, itemDate: item.date })}
            >
                <Text style={doctorcss.text9}>{item.date}</Text>
            </TouchableOpacity>
        );
    };


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(doctoraction(data));
        setLocalData(data)
    }, []);
    const handleclick = (data: any) => {
        if (selectedDay !== null || saat !== null) {
            dispatch(doctoraction(data));
            navigation.navigate('Appointment', {
                selectedDay: daysOfWeek[selectedDay],
                selectedTime: saat,
                doctorData: data,
            });
        } else {
            console.error('Please select a day and time for the appointment.');
        }
    }

    return (
        <View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <View style={doctorcss.view}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'HomeScreen' })} >
                    <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
                </TouchableOpacity>
                <Text style={doctorcss.text}>Doctor Detail</Text>
            </View>
            <View style={doctorcss.view7}>
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
            </View>
            <View style={doctorcss.textview}>
                <Text style={doctorcss.text4}>About</Text>
                <Text style={doctorcss.text3}>
                    {showFullText ? data.detail.about : data.detail.about.substring(0, 100)}
                    {!showFullText && data.detail.about.length > 100 && (
                        <Text style={doctorcss.readMore} onPress={toggleText}>
                            ... Read more
                        </Text>
                    )}
                </Text>
            </View>
            <ScrollView style={doctorcss.dateview} horizontal={true}>
                {daysOfWeek.map((dayInfo: any, index: any) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            doctorcss.datetouc,
                            selectedDay === index ? { backgroundColor: '#199A8E' } : null,
                            index >= currentDate.getDay() ? null : { borderColor: 'red' }, 

                        ]}
                        onPress={() => {
                            if (index >= currentDate.getDay()) {
                                setSelectedDay(index);
                            }
                        }}
                    >
                        <Text style={doctorcss.text5}>
                            {dayInfo.dayName.slice(0, 3)}       {dayInfo.dayOfMonth}  
                        </Text>                   
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
                <TouchableOpacity style={doctorcss.touc2} onPress={() => handleclick(data)}>
                    <Text style={doctorcss.text10}>Book Apointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DoctorDetail