import React from 'react';
import { View, FlatList, Dimensions, Platform, TouchableOpacity } from 'react-native';
import MovieItem from '../MovieItem';


const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const MoviesList = (props) => {



  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
    data={props.movies}
    keyExtractor={(item) => item.key}
    horizontal
    snapToInterval={ITEM_SIZE}
    snapToAlignment='start'
    contentContainerStyle={{ alignItems: 'center' }}
    decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
    bounces={false}
    renderItem={({ item, index }) => {
      return (
          <TouchableOpacity onPress={() => props.showMovieDetails(item.key)}>
            <View style={{ width: ITEM_SIZE}}>
                <MovieItem movie={item}/>
            </View>
          </TouchableOpacity>
      );
    }}
  />
  );
}

export default MoviesList;