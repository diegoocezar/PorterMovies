import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

const Rating = ({rating}) => {
  const stars = Math.floor(rating / 2);

  const filledStars = Array(stars).fill('star');
  const emptyStars = Array(5 - stars).fill('star-o');

  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      {filledStars.map((icon, index) => {
        return <FontAwesome key={index} name={icon} size={12} color={rating > 6 ? 'green' : 'red'} />;
      })}
      {emptyStars.map((icon, index) => {
        return <FontAwesome key={index} name={icon} size={12} color="gray" />;
      })}
    </View>
  );
}

export default Rating;