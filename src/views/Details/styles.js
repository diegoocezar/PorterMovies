import {StyleSheet, Dimensions, Platform} from 'react-native'
import spacing from '../../styles/spacings';
import fonts from '../../styles/fonts';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.88)',
  },
  backButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginVertical: spacing.small,
  },
  posterImage: {
    width: width,
    height: height * 0.3,
  },
  textsContainer: {
    marginHorizontal: spacing.small
  },
  movieTitle: { 
    fontSize: fonts.size.large, 
    fontFamily: fonts.title,
    color: 'white',
    lineHeight: 38,
    textAlign: 'center',
  },
  movieSubTitle: {
    fontSize: fonts.size.small, 
    lineHeight: 26,
    fontFamily: fonts.title,
    color: 'white',
    textAlign: 'center',
  },
  movieDescription: {
    fontSize: fonts.size.medium, 
    fontFamily: fonts.text, 
    lineHeight: 24,
    color: 'white',
    textAlign: 'justify',
    marginBottom: spacing.medium,
  },
  movieText: {
    fontSize: fonts.size.medium, 
    fontFamily: fonts.title, 
    lineHeight: fonts.size.xLarge,
    color: 'white',
    textAlign: 'justify',
    marginBottom: spacing.medium,
  },
  votesCountText: {
    fontSize: fonts.size.small, 
    fontFamily: fonts.text, 
    lineHeight: fonts.size.xLarge,
    color: 'white',
    textAlign: 'center'
  },
  companiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  companiesCard: {
    width: width * 0.4,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  companieNameText: {
    fontSize: fonts.size.small, 
    fontFamily: fonts.title, 
    lineHeight: fonts.size.xLarge,
    color: 'white',
    marginBottom: spacing.small,
  },
  companieImageContainer: {
    width: width * 0.3,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: "center",
    height: width * 0.2,
    marginBottom: spacing.medium,
  },
  companieImage: {
    height: width * 0.2,
  },
  companieWithoutImage: {
    color: '#000',
    textAlign: "center",
  }
})

export default styles;