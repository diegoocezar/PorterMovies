import { StyleSheet, Dimensions, Platform } from 'react-native';
import fonts from '../../styles/fonts';
import spacing from '../../styles/spacings';
const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    marginHorizontal: spacing.small,
    padding:  spacing.medium ,
    alignItems: 'center',
    borderRadius: 25,
  }, 
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    borderRadius: 25,
    marginBottom: spacing.small,
  },
  movieTitle: { 
    alignItems: 'center',
    fontSize: 24, 
    fontFamily: fonts.title 
  },
  movieText: {
    fontSize: 14, 
    fontFamily: fonts.text, 
    lineHeight: 24
  }
});

export default styles;