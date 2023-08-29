import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import stayle from './stayle'; // Make sure you import your styles correctly

const Onboarding = () => {
  const item = useSelector((state: any) => state.OnboardingReducer.value);
  const [currentIndex, setCurrentIndex] = useState<any>(0);

  const onNextPress = () => {
    if (currentIndex < item.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const circles = item.map((_:any, index:any) => (
    <View
      key={index}
      style={[
        stayle.circle,
        index === currentIndex ? stayle.activeCircle : null,
      ]}
    />
  ));

  const renderitem = (item: any, index: number) => {
    if (index === currentIndex) {
      return (
        <View style={stayle.view}>
          <View style={stayle.view1}>
            <Image source={item.imge} style={stayle.img} />
            <Text style={stayle.text}>{item.title}</Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={stayle.container}>
      <FlatList
        data={item}
        renderItem={({ item, index }) => renderitem(item, index)}
        keyExtractor={(item: any) => item.id.toString()}
        style={stayle.flatlist}
      />
      <View style={stayle.circlesContainer}>{circles}</View>
      <TouchableOpacity
        style={stayle.nextButton}
        onPress={onNextPress}
        disabled={currentIndex === item.length - 1}
      >
        <Text style={stayle.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
