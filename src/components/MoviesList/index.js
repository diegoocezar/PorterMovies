import React, { useState, useEffect } from 'react';
import { View, FlatList, Dimensions, Platform, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import MovieItem from '../MovieItem';
import {getMoreMovies} from '../../services/api';

import ErroModal from '../Modal';


const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoadingNextPage, setIsLoadingNextpage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      try {
        const newMovies = await getMoreMovies(nextPage)
        if(newMovies.data === 'error') {
          setIsModalVisible(true)
          setIsLoadingNextpage(false)
        } else { 
          setMovies([...prevMovies, ...newMovies.data]) 
          setCurrentPage(newMovies.page)}
  
      } catch (error) {
        setIsModalVisible(true);
      } ;
    }

    await getData();
    setIsLoadingNextpage(false)
  }

  const toggleModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        contentContainerStyle={{ alignItems: 'center' }}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        bounces={false}
        onEndReachedThreshold={0.5}
        onEndReached={async () => {
          if (!isLoadingNextPage && !isModalVisible) {
              await getNextMoviesPage();
          }
        }}
        renderItem={({ item, index }) => {
          return (
              <TouchableOpacity key={item.id} onPress={() => props.movieDetails(item.id)}>
                <View style={{ width: ITEM_SIZE}}>
                    <MovieItem movie={item}/>
                </View>
              </TouchableOpacity>
          );
        }}
        refreshControl={
          <RefreshControl
              colors={["black"]}
              refreshing={props.refresh}
              onRefresh={async () => await props.onRefreshMoviesList()}
          />
      }
        ListFooterComponent={() => {
          if (isLoadingNextPage) {
              return <ActivityIndicator size="large" color={"white"} />;
          } else {
            return null;
          }
        }}
        ListEmptyComponent={() => {
          if(props.error){
           return (
            <View style={{ width: ITEM_SIZE, marginLeft: ITEM_SIZE * 0.2}}>
              <MovieItem error={props.error}/>
            </View>
           )
          } else {
            return null
          }
        }}
      />
      <ErroModal isVisible={isModalVisible} toggleModal={() => toggleModal()}/> 
    </>
  );
}

export default MoviesList;