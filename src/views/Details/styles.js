import {StyleSheet, Dimensions, Platform} from 'react-native'
import spacing from '../../styles/spacings';
import fonts from '../../styles/fonts';


const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    borderRadius: 25,
    marginBottom: spacing.small,
  },
  movieTitle: { 
    alignItems: 'center',
    fontSize: 32, 
    fontFamily: fonts.title 
  },
  movieText: {
    fontSize: 14, 
    fontFamily: fonts.text, 
    lineHeight: 24
  }
})

export default styles;