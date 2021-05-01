import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getMovies } from '../../services/api';

import {MoviesList} from './../../components'

// import { Container } from './styles';

const Home = () => {

  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };

    fetchData();

  }, []);

  const showMovieDetails = (id) => {
    console.log('movie id ---> ', id);
  }
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MoviesList movies={movies} showMovieDetails={(id) => showMovieDetails(id)}/>
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