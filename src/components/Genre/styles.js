import {StyleSheet} from 'react-native';
import fonts from '../../styles/fonts';


const styles = StyleSheet.create({
  genreList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 4,
  },
  genre:{
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#000',
    marginRight: 4,
    marginBottom: 4
  },
  genreText:{
    fontSize: 10,
    fontFamily: fonts.text,
  },
})

export default styles;