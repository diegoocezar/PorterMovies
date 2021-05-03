import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
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