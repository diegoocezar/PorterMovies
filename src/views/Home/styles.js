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
  modal: {
    flex: 1, 
    justifyContent: 'flex-end',    
    margin: 0
  },
  modalContentContainer: {
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'flex-end',  
    paddingBottom: 10,
    paddingHorizontal: 10,  
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  modalErrorText: {
    fontSize: fonts.size.medium, 
    fontFamily: fonts.title, 
    lineHeight: fonts.size.xLarge,
    color: 'black',
    textAlign: 'center',
  },
  modalErrorButton: {
    backgroundColor: 'black',
    height: 48,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  modalErrorButtonText: {
    fontSize: fonts.size.medium, 
    fontFamily: fonts.title, 
    lineHeight: fonts.size.xLarge,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;