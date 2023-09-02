import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell,faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faStethoscope, faKitMedical,faTruckMedical  } from '@fortawesome/free-solid-svg-icons';

import homecss from './homecss';
const Home = () => {
    const [search, setsearch] = useState('')
    return (
        <View>
            <View style={homecss.view1}>
                <Text style={homecss.text}>Find your desire healt solution</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faBell} style={homecss.icon} size={35} />
                </TouchableOpacity>
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
            <View style={homecss.toucview}>
               <View>
               <TouchableOpacity style={homecss.touc}>
                    <FontAwesomeIcon icon={faStethoscope} style={homecss.icon3} size={40} />
                </TouchableOpacity>
                <Text style={homecss.text1}>Doctor</Text>
               </View>
               <View>
               <TouchableOpacity style={homecss.touc}>
                    <FontAwesomeIcon icon={faKitMedical} style={homecss.icon3} size={40} />
                </TouchableOpacity>
                <Text style={homecss.text1}>Pharmacy</Text>
               </View>
               <View>
               <TouchableOpacity style={homecss.touc}>
                    <FontAwesomeIcon icon={faNewspaper} style={homecss.icon3} size={40} />
                </TouchableOpacity>
                <Text style={homecss.text1}>News</Text>
               </View>
               <View>
               <TouchableOpacity style={homecss.touc}>
                    <FontAwesomeIcon icon={faTruckMedical} style={homecss.icon3} size={40} />
                </TouchableOpacity>
                <Text style={homecss.text1}>Ambulance</Text>
               </View>
            </View>
        </View>
    )
}

export default Home