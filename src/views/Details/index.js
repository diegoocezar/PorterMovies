import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Rating, Genre } from './../../components';


import styles from './styles';

const Details = ({route, navigation}) => {
  const { details } = route.params
  console.log('details', details)
  const getBackdropPath = (path) =>{
  return `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`};

  return (
    <ScrollView>
      <Text style={styles.movieTitle} numberOfLines={1}>{details.title}</Text>
      <Image
        source={{ uri: getBackdropPath(details.backdropPath) }}
        style={styles.posterImage}
        resizeMode="contain"
      />
      <Text style={styles.movieTitle}>{details.tagline}</Text>
      <Rating rating={details.rating}/>
      <Text style={styles.movieText} >Total Votes - {details.voteCount}</Text>
      <Genre genres={details.genres}/>
      <Text style={styles.movieText} >{details.description}</Text>
      <Text style={styles.movieText} >Release Date - {details.releaseDate}</Text>
      <Text style={styles.movieText} >Runtime - {details.runtime}h</Text>
      <Text style={styles.movieText} >Budget - {details.budget}</Text>
      <Text style={styles.movieText} >Revenue - {details.revenue}</Text>
      <Text style={styles.movieText} >Original Language - {details.originalLanguage}</Text>
      <Text style={styles.movieText} >Popularity - {details.popularity}</Text>
      {details.productionCompanies.map(companie => 
        <>
          <Text key={companie.id} style={styles.movieText} >Companie - {companie.name}</Text>
          <Image
          source={{ uri: getBackdropPath(companie.logo_path) }}
          style={styles.posterImage}
          resizeMode="contain"
          />
        </>
      ) }


    </ScrollView>);
}

export default Details;