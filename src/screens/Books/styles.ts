import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WIDTH } from '../../utils/dimensions';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
    margin: 10,
  },
  header: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    maxHeight: 80,
  },
  backdrop: {
    alignItems: 'center',
    flex: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    borderWidth: 1,
    borderRadius: 40,
    minHeight: 200,
    width: '100%',
  },
  flatlistContent: {
    width: '100%',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.grey,
    paddingRight: 5,
    paddingLeft: 5,
    width: DEVICE_WIDTH * 1,
  },
  listItemContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: 'center',
    marginRight: 4,
    marginLeft: 4,
    width: DEVICE_WIDTH * 0.48,
  },
  listItemContainerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  overlay: {
    opacity: 0.8,
    backgroundColor: '#000000',
  },
});

export default styles;
