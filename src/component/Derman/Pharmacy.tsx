import { View, Text, TouchableOpacity, FlatList, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import doctorcss from '../Doctor/doctorcss';
import { useSelector, useDispatch } from 'react-redux';
import { doctoraction } from '../../store/feature/doctorSlice';
import homecss from '../Home/homecss';
import dermancss from './dermancss';
import { dermanaction } from '../../store/feature/dermanSlice';
const Pharmacy = ({ navigation }: any) => {
  const [search, setsearch] = useState('')
  const item2 = useSelector((state: any) => state.dermanReducer.value)
  const dispatch = useDispatch()
  const handlepres=(item2:any)=>{
    dispatch(dermanaction(item2));
    navigation.navigate('DrugsDetail')
  }
  const handlepres1=(item2:any)=>{
    dispatch(dermanaction(item2));
    navigation.navigate('DrugsDetail')
  }
  const renderItem1 = (item2: any) => {
    return (
      <View style={dermancss.view}>
        <TouchableOpacity style={dermancss.touc2} onPress={()=>handlepres(item2)}>
          <Image
            source={item2.imge}
            style={dermancss.imge2}
          />
        </TouchableOpacity>
        <View style={dermancss.view1}>
          <Text style={dermancss.text9}>{item2.name}</Text>
          <Text style={dermancss.text10}>{item2.qram}</Text>
        </View>
        <View style={dermancss.view2}>
          <Text style={dermancss.text11}>${item2.price}</Text>
          <TouchableOpacity style={dermancss.touc3}>
            <FontAwesomeIcon icon={faPlus} style={[doctorcss.icon, { marginLeft: '12%' }]} color='#ffffff' size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const renderItem2 = (item2: any) => {
    return (
      <View style={dermancss.view}>
        <TouchableOpacity style={dermancss.touc2} onPress={()=>handlepres1(item2)}>
          <Image
            source={item2.imge}
            style={dermancss.imge2}
          />
        </TouchableOpacity>
        <View style={dermancss.view1}>
          <Text style={dermancss.text9}>{item2.name}</Text>
          <View style={{display:'flex',flexDirection:'row',}}>
          <Text style={dermancss.text10}>{item2.qram}</Text>
          <Text style={[dermancss.text10,{marginLeft:60,textDecorationLine: 'line-through' }]}>${item2.star}</Text>
          </View>
        </View>
        <View style={dermancss.view2}>
          <Text style={dermancss.text11}>${item2.price}</Text>
          <TouchableOpacity style={dermancss.touc3}>
            <FontAwesomeIcon icon={faPlus} style={[doctorcss.icon, { marginLeft: '12%' }]} color='#ffffff' size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={{backgroundColor: '#ffffff', flex:1}}>
      <View style={doctorcss.view}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabbar', { screen: 'HomeScreen' })} >
          <FontAwesomeIcon icon={faChevronLeft} style={doctorcss.icon} size={30} />
        </TouchableOpacity>
        <Text style={doctorcss.text}>Pharmacy</Text>
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
      <View>
        <View style={[homecss.view10, { marginTop: '3%', marginBottom: '-2%' }]}>
          <Text style={homecss.text9}>Trending Articles</Text>
        </View>
        <View>
          <FlatList
            data={item2}
            renderItem={({ item }) => renderItem1(item)}
            keyExtractor={(item: any) => item.id.toString()}
            numColumns={2}
          />
        </View>
      </View>
      <View>
        <View style={[homecss.view10, { marginTop: '3%', marginBottom: '-2%' }]}>
          <Text style={homecss.text9}>Product on Sale</Text>
        </View>
        <View>
          <FlatList
            data={item2}
            renderItem={({ item }) => renderItem2(item)}
            keyExtractor={(item: any) => item.id.toString()}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  )
}

export default Pharmacy