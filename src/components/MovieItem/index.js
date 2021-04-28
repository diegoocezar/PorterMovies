import React from 'react';
import { View, Image, Text } from 'react-native';
import fonts from '../../styles/fonts';
import styles from './styles';


const Moviemovie = ({movie}) => {

  //Monta o path da imagem
  const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <View>
            <Image
              source={{ uri: getImagePath(movie.posterPath) }}
              style={styles.posterImage}
            />
            <Text style={{ fontSize: 24, fontFamily: fonts.title }} numberOfLines={1}>
              {movie.title}
            </Text>
            <Text style={{ fontSize: 12 }} numberOfLines={1}>
              rating - {movie.rating}
            </Text>
            <Text style={{ fontSize: 12 }} numberOfLines={1}>
              releaseDate - {movie.releaseDate}
            </Text>
            <Text style={{ fontSize: 12, fontFamily: fonts.text }} numberOfLines={3}>
            voteCount - {movie.voteCount}
            </Text>
          </View>
  );
};

export default Moviemovie;