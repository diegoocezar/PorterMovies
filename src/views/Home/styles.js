import {StyleSheet} from 'react-native'
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  logo:{
    width: 90,
    height: 90,
  },
  textContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  logoFirstText:{
    color: 'white',
    fontFamily: fonts.logoText,
    fontSize: fonts.size.huge,
  },
  logoSecondText:{
    color: 'white',
    letterSpacing: 4,
    marginTop: -12
  },
});

export default styles;