import { View, Text, TouchableOpacity, FlatList, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import homecss from '../Home/homecss';
import dermancss from './dermancss';
import { dermanaction } from '../../store/feature/dermanSlice';
import StarRating from './StarRating';
const DrugsDetail = ({ navigation }: any) => {
  const item2 = useSelector((state: any) => state.dermanReducer.value)
  const dispatch = useDispatch()
  const [showFullText, setShowFullText] = useState(false);

  const handleclick = (item2: any) => {
    dispatch(dermanaction(item2))
    navigation.navigate('MyCart')
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={doctorcss.view}>
        <TouchableOpacity onPress={() =>navigation.navigate('Pharmacy')}  >
          <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
        </TouchableOpacity>
        <Text style={doctorcss.text}>Drugs Detail</Text>
      </View>
      <View>
        <Image
          source={item2.imge}
          style={dermancss.imge3}
        />
        <Text style={dermancss.text12}>{item2.name}</Text>
        <Text style={dermancss.text13}>{item2.qram}</Text>
        <View style={dermancss.view5}>
          <StarRating rating={item2.star1} />
        </View>
        <View style={dermancss.view3}>
          <Text style={dermancss.text14}>${item2.price}</Text>
        </View>
      </View>
      <View style={dermancss.view4}>
        <Text style={dermancss.text15}>{item2.description}</Text>
      </View>
      <View style={[doctorcss.view9,{marginTop:'4%', marginBottom:'2%'}]}>
        <TouchableOpacity style={doctorcss.touc1}>
          <FontAwesomeIcon icon={faBasketShopping} style={doctorcss.icon1} size={35} />
        </TouchableOpacity>
        <TouchableOpacity style={doctorcss.touc2} onPress={() => handleclick(item2)}>
          <Text style={doctorcss.text10}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DrugsDetail