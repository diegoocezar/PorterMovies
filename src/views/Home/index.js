import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getMovies, getMovieDetails } from '../../services/api';

import ErroModal from '../../components/Modal';
import {MoviesList} from './../../components'
import styles from './styles';

const Home = ({ navigation }) => {

  const [movies, setMovies] = useState({});
  const [hasError, setHasError] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchData = async () => {
    try {
      const movies =   await getMovies();
      movies.data === 'error' ? setHasError(true) : setMovies(movies);
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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showMovieDetails = async (id) => {
    const details = await getMovieDetails(id);
    details.data === 'error' ? toggleModal() : navigation.navigate('Details', {details: details});
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
      <ErroModal isVisible={isModalVisible} toggleModal={() => toggleModal()}/>  
    </View>
  );
};


export default Home;