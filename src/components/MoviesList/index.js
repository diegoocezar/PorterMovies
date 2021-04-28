import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import MovieItem from '../MovieItem';
import { getMovies } from '../../services/api';

const {width, height} = Dimensions.get('window')

const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      setMovies(movies.data);
    };

    fetchData();

  }, []);

  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
    data={movies}
    keyExtractor={(item) => item.key}
    horizontal
    contentContainerStyle={{ alignItems: 'center' }}
    renderItem={({ item, index }) => {

      return (
        <View style={{ width: width }}>
          <MovieItem movie={item}/>
        </View>
      );
    }}
  />
  );
}

export default MoviesList;