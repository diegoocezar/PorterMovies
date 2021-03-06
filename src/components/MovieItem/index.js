import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment'

import styles from './styles';
import Rating from '../Rating';

const Moviemovie = ({movie, error}) => {
  //Monta o path da imagem
  const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    !error ? (
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
        Total votes - {movie.voteCount}
      </Text>
      <Text style={styles.movieText} numberOfLines={1}>
        Release date - {movie.releaseDate}
      </Text>
      
    </View>
    ) : (
      <View style={styles.container}>
        <Image
          source={require('../../assets/sad.png')}
          style={styles.posterImage}
          resizeMode="contain"
        />
        <Text style={styles.errorText}>
          Could not get movies, check your internet connection and try again later!
        </Text>
      
      </View>
    )
  );
};

export default Moviemovie;