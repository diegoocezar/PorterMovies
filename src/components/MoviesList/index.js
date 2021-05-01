import React, { useState, useEffect } from 'react';
import { View, FlatList, Dimensions, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import MovieItem from '../MovieItem';
import {getMoreMovies} from '../../services/api';


const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoadingNextPage, setIsLoadingNextpage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    setMovies(props.movies.data)
    setTotalPages(props.movies.totalPages)
    setCurrentPage(props.movies.page)

  }, [props.movies.data])


  const getNextMoviesPage = async () => {
    const nextPage = currentPage + 1;

    if(isLoadingNextPage || nextPage > totalPages) {
      return;
    }
    
    const getData = async () => {
      setIsLoadingNextpage(true)
      const prevMovies = movies;
      const newMovies = await getMoreMovies(nextPage)
      setMovies([...prevMovies, ...newMovies.data])
      
      setCurrentPage(newMovies.page)
    }

    await getData();
    setIsLoadingNextpage(false)

  }

  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
    data={movies}
    keyExtractor={(item) => item.key}
    horizontal
    snapToInterval={ITEM_SIZE}
    snapToAlignment='start'
    contentContainerStyle={{ alignItems: 'center' }}
    decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
    bounces={false}
    onEndReachedThreshold={0.5}
    onEndReached={async () => {
      if (!isLoadingNextPage) {
          await getNextMoviesPage();
      }
    }}
    renderItem={({ item, index }) => {
      return (
          <TouchableOpacity key={index}onPress={() => props.showMovieDetails(item.key)}>
            <View style={{ width: ITEM_SIZE}}>
                <MovieItem movie={item}/>
            </View>
          </TouchableOpacity>
      );
    }}
    ListFooterComponent={() => {
      if (isLoadingNextPage) {
          return <ActivityIndicator size="large" color={"white"} />;
      } else {
        return null;
      }
    }}
  />
  );
}

export default MoviesList;