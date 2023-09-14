import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
const Splas = ({navigation}:any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('OnboardinScreen', { screen: 'Onboarding' })
            console.log('salam');
            
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <View style={{flex:1,backgroundColor:'#199A8E', position:'relative',}}>
        <Image
        source={require('../../asset/imge/1.png')}
        style={{position:'absolute',zIndex:1, width:350,height:340,alignSelf:'center', marginTop:'50%'}}
        />
    </View>
  )
}

export default Splas