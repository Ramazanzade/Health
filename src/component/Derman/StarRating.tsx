import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }:any) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating); 
  const halfStar = rating - filledStars >= 0.5; 
  const emptyStars = maxRating - filledStars - (halfStar ? 1 : 0); 

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(filledStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="#199A8E" size={20} />
      ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStar} color="#E8F3F1" size={20}/>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="#E8F3F1" size={20} />
      ))}
    </View>
  );
};

export default StarRating;
