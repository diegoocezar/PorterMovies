import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getMovies, getMovieDetails } from '../../services/api';

import {MoviesList} from './../../components'

const Home = ({ navigation }) => {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };

    fetchData();

  }, []);

  const showMovieDetails = async (id) => {
    const details = await getMovieDetails(id)

    navigation.navigate('Details', {details: details})
  }
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MoviesList movies={movies} movieDetails={(id) => showMovieDetails(id)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default Home;