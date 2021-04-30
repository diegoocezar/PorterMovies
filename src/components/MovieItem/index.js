import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment'

import fonts from '../../styles/fonts';
import styles from './styles';
import Rating from '../Rating';


const Moviemovie = ({movie}) => {

  //Monta o path da imagem
  const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
      <View style={styles.container}>
      <Image
        source={{ uri: getImagePath(movie.posterPath) }}
        style={styles.posterImage}
        resizeMode="contain"
      />
      <Text style={styles.movieTitle} numberOfLines={1}>
        {movie.title}
      </Text>
      <Rating rating={ movie.rating } />
      <Text style={styles.movieText} numberOfLines={1}>
        Lançamento - {moment(movie.releaseDate).format('DD/MM/YY')}
      </Text>
      <Text style={styles.movieText} numberOfLines={1}>
        Total de votos - {movie.voteCount}
      </Text>
    </View>
  );
};

export default Moviemovie;