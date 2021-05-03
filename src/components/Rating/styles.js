import {StyleSheet} from 'react-native'
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  ratingNumber: { 
    marginRight: 4, 
    fontSize: fonts.size.medium, 
    fontFamily: fonts.text, 
  }
});

export default styles;