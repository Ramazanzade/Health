import { View, Text, TouchableOpacity, FlatList, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMagnifyingGlass, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import dermancss from '../Derman/dermancss'
import { dermanaction } from '../../store/feature/dermanSlice';

const Calendar = ({ navigation }: any) => {
  const favoriteItems = useSelector((state: any) =>
    state.dermanReducer.value.filter((item: any) => item.isFavorite)
  );
  const renderItem1 = (favoriteItems: any) => {
    return (
      <View style={dermancss.view}>
        <TouchableOpacity style={dermancss.touc2}>
          <Image
            source={favoriteItems.imge}
            style={dermancss.imge2}
          />
        </TouchableOpacity>
        <View style={dermancss.view1}>
          <Text style={dermancss.text9}>{favoriteItems.name}</Text>
          <Text style={dermancss.text10}>{favoriteItems.qram}</Text>
        </View>
        <View style={dermancss.view2}>
          <Text style={dermancss.text11}>${favoriteItems.price}</Text>
          <TouchableOpacity style={dermancss.touc3}>
            <FontAwesomeIcon
              icon={favoriteItems.isFavorite ? faCheck : faPlus}
              style={[doctorcss.icon, { marginLeft: '12%' }]}
              color='#ffffff'
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <Text style={{ margin: '5%', fontSize: 30, color: '#000000' }} >Favorite</Text>
      <Text style={{ margin: '5%', fontSize: 25 }}>Pharmacy</Text>
      <FlatList
        data={favoriteItems}
        renderItem={({ item }) => renderItem1(item)}
        keyExtractor={(item: any) => item.id.toString()}
        numColumns={2}
      />
    </View>
  )
}

export default Calendar