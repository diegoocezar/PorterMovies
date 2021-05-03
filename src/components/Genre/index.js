import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Genre = ({genres, color}) => {
  return (
    <View style={styles.genreList}>
      {genres.map((genre) => {
        return(
          <View key={genre} style={[styles.genre, color && {borderColor: color}]}>
            <Text style={[styles.genreText, color && {color: color}]}>{genre}</Text>
          </View>
        )
      })}

     </View>
  );
}

export default Genre;