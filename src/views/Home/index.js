import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getMovies, getMovieDetails } from '../../services/api';

import {MoviesList} from './../../components'
import styles from './styles';

const Home = ({ navigation }) => {

  const [movies, setMovies] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const fetchData = async () => {
    try {
      const movies =   await getMovies();
      setMovies(movies);

    } catch (error) {
      setHasError(true);
    } ;
  };
  
  useEffect(() => {
    

    fetchData();

  }, []);

  const onRefreshMoviesList = async () => {
    setRefresh(true);
    await fetchData()
    setRefresh(false);

  };

  const showMovieDetails = async (id) => {
    const details = await getMovieDetails(id)

    navigation.navigate('Details', {details: details})
  }
  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} resizeMode="contain"/>
        <View style={styles.textContainer}>
          <Text style={styles.logoFirstText}>PORTER</Text>
          <Text style={styles.logoSecondText}>MOVIES</Text>
        </View>
      </View>
      <MoviesList movies={movies} error={hasError} refresh={refresh} onRefreshMoviesList={() => onRefreshMoviesList()} movieDetails={(id) => showMovieDetails(id)}/>
    </View>
  );
};


export default Home;