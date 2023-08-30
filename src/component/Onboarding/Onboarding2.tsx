import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import stayle from './stayle'

const Onboarding2 = ({navigation}:any) => {
  return (
    <View>
      <View style={stayle.view3}>
        <Image
          source={require('../../asset/imge/5.png')}
          style={stayle.imge}
        />
        <View style={stayle.textview}>
          <Text style={stayle.text1}> Let’s get started!</Text>
          <Text style={stayle.text2}> Login to enjoy the features we’ve provided, and stay healthy!</Text>
        </View>

      </View>
      <View style={stayle.view4}>
        <TouchableOpacity style={stayle.touc} onPress={()=> navigation.navigate('LoginScreen')}>
          <Text style={stayle.text3}> Login</Text> 
         </TouchableOpacity>
         <TouchableOpacity style={stayle.touc1}>
          <Text style={stayle.text4}> Sign up</Text> 
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default Onboarding2