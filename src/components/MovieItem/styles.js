import { StyleSheet, Dimensions, Platform } from 'react-native';
import fonts from '../../styles/fonts';
import spacing from '../../styles/spacings';
const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: spacing.small,
    padding:  spacing.medium ,
    alignItems: 'center',
    borderRadius: 25,
  }, 
  posterImage: {
    width: width,
    height: ITEM_SIZE * 1.2,
    borderRadius: 25,
    marginBottom: spacing.small,
  },
  movieTitle: { 
    alignItems: 'center',
    fontSize: fonts.size.xLarge, 
    fontFamily: fonts.title 
  },
  movieText: {
    fontSize: fonts.size.medium, 
    fontFamily: fonts.text, 
    lineHeight: fonts.size.xLarge
  },
  errorText: {
    fontSize: fonts.size.large, 
    fontFamily: fonts.title, 
    lineHeight: fonts.size.xLarge,
    textAlign: 'center'
  }
});

export default styles;