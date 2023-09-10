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
const MyCart = ({ navigation, initialQuantity }: any) => {
  const item2 = useSelector((state: any) => state.dermanReducer.value)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const price = item2.price
  const totalPrice = quantity * price;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={doctorcss.view}>
        <TouchableOpacity onPress={() => navigation.navigate('DrungsDetail')} >
          <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
        </TouchableOpacity>
        <Text style={doctorcss.text}>My Cart</Text>
      </View>
      <View style={[dermancss.view, { display: 'flex', flexDirection: 'row' }]}>
        <TouchableOpacity style={dermancss.touc2}>
          <Image
            source={item2.imge}
            style={dermancss.imge2}
          />
        </TouchableOpacity>
        <View style={{ marginTop: '10%' }}>
          <View style={dermancss.view1}>
            <Text style={dermancss.text9}>{item2.name}</Text>
            <Text style={dermancss.text10}>{item2.qram}</Text>
          </View>
          <View style={[dermancss.view2,{marginTop:10}]}>
            <TouchableOpacity onPress={handleDecrement} style={dermancss.touc4}>
              <Text style={[dermancss.text11,{color:'#ffffff', textAlign:'center' }]}>-</Text>
            </TouchableOpacity>
            <Text style={dermancss.text11}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncrement}  style={dermancss.touc4}>
              <Text style={[dermancss.text11,{color:'#ffffff', textAlign:'center', marginBottom:10 }]}>+</Text>
            </TouchableOpacity>
            <Text style={dermancss.text11}>   ${totalPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MyCart