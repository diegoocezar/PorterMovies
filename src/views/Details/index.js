import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating, Genre } from './../../components';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Header = ({details, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={32} color="white"/>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.titleContainer}>
        
      </View> */}
    </View>
  )
}

const Details = ({route, navigation}) => {
  const { details } = route.params

  const getBackdropPath = (path) =>{
    return `https://image.tmdb.org/t/p/original${path}`};

  const getCompaniePath = (path) =>{
    return `https://image.tmdb.org/t/p/w300${path}`};

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={([0])}>
        <Header details={details} navigation={navigation}/>
        <Image
          source={{ uri: getBackdropPath(details.backdropPath) }}
          style={styles.posterImage}
          resizeMode="contain"
        />
        <View style={styles.textsContainer}>
          <Text style={styles.movieTitle} numberOfLines={2}>
            {details.title}
          </Text>
          <Text style={styles.movieSubTitle}>{details.tagline}</Text>
          <Rating rating={details.rating} color={'white'}/>
          <Text style={styles.votesCountText} >{details.voteCount} votes</Text>
          <Genre genres={details.genres} color={'white'}/>
          <Text style={styles.movieDescription} >{details.description}</Text>
          <Text style={styles.movieText} >Release Date: {details.releaseDate}</Text>
          <Text style={styles.movieText} >Runtime: {details.runtime}h</Text>
          <Text style={styles.movieText} >Budget: {details.budget}</Text>
          <Text style={styles.movieText} >Revenue: {details.revenue}</Text>
          <Text style={styles.movieText} >Popularity: {details.popularity}</Text>
          <Text  style={styles.movieText}>Production {details.productionCompanies.length > 1 ? 'companies' : 'companie'}:</Text>
            
            <View style={styles.companiesContainer}>
              {details.productionCompanies.map(companie =>
                <View key={companie.id} style={styles.companiesCard}>
                  <Text  style={styles.companieNameText} numberOfLines={1}>{companie.name}</Text>
                  <View style={styles.companieImageContainer}>
                    {companie.logo_path !== null ? (
                      <Image
                        source={{ uri: getCompaniePath(companie.logo_path) }}
                        style={styles.companieImage}
                        resizeMode="center"
                      />
                    ):(
                      <Text  style={styles.companieWithoutImage} >No image available</Text>
                    )}
                  </View>    
                </View>
              ) }
            </View>
        </View>
      </ScrollView>
    </View>);
}

export default Details;