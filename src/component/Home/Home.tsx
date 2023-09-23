// import { View, Text, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native'

// import React, { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBell, faNewspaper } from '@fortawesome/free-regular-svg-icons';
// import { faMagnifyingGlass, faStethoscope, faKitMedical, faTruckMedical, faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import homecss from './homecss';
// import { useSelector, useDispatch } from 'react-redux';
// import { doctoraction } from '../../store/feature/doctorSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const Home = ({ navigation }: any) => {
//     const [search, setsearch] = useState('')
//     const item1 = useSelector((state: any) => state.reclamReducer.value)
//     const data = useSelector((state: any) => state.doctorReducer.value)
//     const items = useSelector((state: any) => state.dermanproductReducer.value)
//     const dispatch = useDispatch()

//     const handleprees = (data: any) => {
//         dispatch(doctoraction(data));
//         navigation.navigate('DoctorScreen', { screen: 'DoctorDetail' })
//     }
//     const handleprees1 = (items: any) => {
//         dispatch(doctoraction(items));
//         navigation.navigate('DermanScreen', { screen: 'Arcticles' })
//     }
//     const renderItem5 = (data: any) => {
//         return (
//             <TouchableOpacity style={homecss.touc2} onPress={() => handleprees(data)}>
//                 <View style={homecss.view5}>
//                     <Image
//                         source={data.detail.imge}
//                         style={homecss.imge}
//                     />
//                 </View>
//                 <View style={homecss.view6}>
//                     <Text style={homecss.text5}>{data.detail.name}</Text>
//                     <Text style={homecss.text6}>{data.category}</Text>
//                 </View>
//                 <View style={homecss.view7}>
//                     <View style={homecss.view8}>
//                         <FontAwesomeIcon icon={faStar} style={homecss.icon4} size={10} />
//                         <Text style={homecss.text7}>{data.detail.star}</Text>
//                     </View>
//                     <View style={homecss.view9}>
//                         <FontAwesomeIcon icon={faLocationDot} style={homecss.icon5} size={10} />
//                         <Text style={homecss.text8}>{data.detail.loction}</Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         )
//     }
//     const renderItem4 = (items: any) => {
//         return (
//             <TouchableOpacity style={homecss.touc3} onPress={() => handleprees1(items)}>
//                 <View style={homecss.view11}>
//                     <Image
//                         source={items.imge}
//                         style={homecss.img1}
//                     />
//                 </View>
//                 <View style={homecss.view12}>
//                     <Text style={homecss.text11}>{items.name}</Text>
//                     <Text style={homecss.text12}>{items.price} - <Text style={homecss.text13}>{items.red}</Text></Text>
//                 </View>
//             </TouchableOpacity>
//         )
//     }
//     return (
//         <View style={{ backgroundColor: '#FFFFFF' }}>
//             <View style={homecss.view1}>
//                 <Text style={homecss.text}>Find your desire healt solution</Text>
//                 <TouchableOpacity>
//                     <FontAwesomeIcon icon={faBell} style={homecss.icon} size={35} />
//                 </TouchableOpacity>
//             </View>
//             <View style={homecss.inputview}>
//                 <FontAwesomeIcon icon={faMagnifyingGlass} style={homecss.icon2} size={25} />
//                 <TextInput
//                     onChangeText={setsearch}
//                     value={search}
//                     style={homecss.input}
//                     placeholder='Search doctor, drugs, articles...'
//                 />
//             </View>
//             <ScrollView>
//                 <View style={homecss.toucview}>
//                     <View>
//                         <TouchableOpacity style={homecss.touc} onPress={() => navigation.navigate('DoctorScreen', { screen: 'FindDoctors' })}>
//                             <FontAwesomeIcon icon={faStethoscope} style={homecss.icon3} size={40} />
//                         </TouchableOpacity>
//                         <Text style={homecss.text1}>Doctor</Text>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={homecss.touc} onPress={() => navigation.navigate('DermanScreen', { screen: 'Pharmacy' })}>
//                             <FontAwesomeIcon icon={faKitMedical} style={homecss.icon3} size={40} />
//                         </TouchableOpacity>
//                         <Text style={homecss.text1}>Pharmacy</Text>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={homecss.touc} onPress={() => navigation.navigate('DermanScreen', { screen: 'Arcticles' })}>
//                             <FontAwesomeIcon icon={faNewspaper} style={homecss.icon3} size={40} />
//                         </TouchableOpacity>
//                         <Text style={homecss.text1}>News</Text>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={homecss.touc}>
//                             <FontAwesomeIcon icon={faTruckMedical} style={homecss.icon3} size={40} />
//                         </TouchableOpacity>
//                         <Text style={homecss.text1}>Ambulance</Text>
//                     </View>
//                 </View>
//                 <View>
//                     <FlatList
//                         data={item1}
//                         renderItem={({ item }) => (
//                             <View style={homecss.view2}>
//                                 <View style={homecss.view3} >
//                                     <Text style={homecss.text3}>{item.decripdion}</Text>
//                                     <TouchableOpacity style={homecss.touc1}>
//                                         <Text style={homecss.text4}>Learn more</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={homecss.view4}>
//                                     <Image
//                                         source={item.img}
//                                         style={homecss.img}
//                                     />
//                                 </View>
//                             </View>
//                         )}
//                         keyExtractor={(item: any) => item.id.toString()}
//                         style={homecss.flatlist}
//                         horizontal={true}
//                     />
//                 </View>
//                 <View>
//                     <View style={homecss.view10}>
//                         <Text style={homecss.text9}>Top Doctor</Text>
//                         <TouchableOpacity onPress={() => navigation.navigate('DoctorScreen', { screen: 'TopDoctor' })}>
//                             <Text style={homecss.text10}> See all</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <FlatList
//                         data={data}
//                         renderItem={({ item }) => renderItem5(item)}
//                         keyExtractor={(item: any) => item.id.toString()}
//                         horizontal={true}
//                     />
//                 </View>
//                 <View>
//                     <View style={homecss.view10}>
//                         <Text style={homecss.text9}>Top Doctor</Text>
//                         <TouchableOpacity onPress={() => navigation.navigate('DermanScreen', { screen: 'Arcticles' })}>
//                             <Text style={homecss.text10}> See all</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <FlatList
//                         data={items}
//                         renderItem={({ item }) => renderItem4(item)}
//                         keyExtractor={(item: any) => item.id.toString()}
//                         style={homecss.flatlist1}
//                     />
//                 </View>
//             </ScrollView>
//         </View>
//     )
// }

// export default Home


import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle, G, Path } from 'react-native-svg';

const data = [10, 20, 30]; // Replace this with your API data

const Chart = ({ data }:any) => {
  const total = data.reduce((acc:any, value:any) => acc + value, 0);
  const colors = ['blue', 'green', 'red']; // Define colors for the parts

  let startAngle = 0;
  const chartParts = data.map((value:any, index:any) => {
    const angle = (value / total) * 360;
    const endAngle = startAngle + angle;
    const color = colors[index];

    const path = `
      M50,50 L50,0
      A50,50 0 ${angle > 180 ? 1 : 0},1 
      ${Math.cos((endAngle * Math.PI) / 180) * 50 + 50},
      ${Math.sin((endAngle * Math.PI) / 180) * 50 + 50}
      Z
    `;

    startAngle = endAngle;

    return <Path key={index} d={path} fill={color} />;
  });

  return (
    <Svg width={100} height={100}>
      <G transform="rotate(-90 50 50)">
        {chartParts}
        <Circle cx={50} cy={50} r={40} fill="white" />
      </G>
    </Svg>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Chart data={data} />
    </View>
  );
};

export default Home;

  