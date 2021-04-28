import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: height * 0.5,
  },
});

export default styles;