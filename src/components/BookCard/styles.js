import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../common';
import {normalizeWidth, normalizeHeight} from '../../utils';
const SCREEN = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};
export default StyleSheet.create({
  containerStyle: {
    marginVertical: normalizeHeight(10),
  },
  txtStyle: {
    fontSize: normalizeHeight(17),
    width: SCREEN.WIDTH * 0.5,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  bookList: {
    marginHorizontal: normalizeWidth(10),
    backgroundColor: COLORS.white,
    marginVertical: normalizeHeight(5),
  },
  image: {
    width: normalizeWidth(120),
    height: normalizeHeight(180),
    marginLeft: normalizeWidth(5),
    marginRight: normalizeWidth(20),
    borderWidth: normalizeWidth(0.5),
  },
  rowView: {
    flexDirection: 'row',
    marginTop: normalizeHeight(10),
    width: normalizeWidth(200),
  },
  like: {
    marginRight: normalizeWidth(5),
  },
});
