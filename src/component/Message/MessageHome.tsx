import { View, Text } from 'react-native'
import React from 'react'
import Messagetabbar from '../../navigation/Tabbar/Messagetabbar'
import messagecss from './messagecss'

const MessageHome = () => {
    return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <Text style={messagecss.text}>Message</Text>
            <View style={messagecss.view}>
                <Messagetabbar></Messagetabbar>
            </View>
        </View>
    )
}

export default MessageHome