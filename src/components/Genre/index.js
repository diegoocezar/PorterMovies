import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Genre = ({genres}) => {
  return (
    <View style={styles.genreList}>
      {genres.map((genre) => {
        return(
          <View key={genre} style={styles.genre}>
            <Text style={styles.genreText}>{genre}</Text>
          </View>
        )
      })}

     </View>
  );
}

export default Genre;