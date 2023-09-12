import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import chatcss from './messagecss'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCheckDouble } from '@fortawesome/free-solid-svg-icons';
const Message = ({ navigation }: any) => {
  const data = useSelector((state: any) => state.doctorReducer.value)

  const renderitem = (data: any) => {
    return (
      <TouchableOpacity style={chatcss.touc} onPress={() => navigation.navigate('Chatscreen2', { screen: 'Chatscreen' })}>
        <View style={chatcss.view1}>
          <View style={chatcss.imgview}>
            <Image
              source={data.detail.imge}
              style={chatcss.img}
            />
          </View>
          <View style={chatcss.text1}>
            <Text style={chatcss.nametext}>{data.detail.name}</Text>
            <Text style={chatcss.mesagetext}>{data.detail.message}</Text>
          </View>
        </View>
        <View style={chatcss.text2}>
          <Text style={chatcss.datetext}>{data.detail.date}</Text>
          {data.detail.message1 ? (
            <View style={chatcss.messahe1view}>
              <Text style={chatcss.message1text}>{data.detail.message1}</Text>
            </View>
          ) : (
            <FontAwesomeIcon icon={faCheckDouble} size={20} style={{marginTop:'30%', color:'#ADADAD'}} />
          )}
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

export default Message