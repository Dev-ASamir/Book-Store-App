import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, COLORS} from '../../common';
import {normalizeHeight, normalizeWidth} from '../../utils';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: normalizeHeight(50),
    flexDirection: 'row',
    width: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.black,
    marginBottom: normalizeHeight(15),
  },
  textInput: {
    ...FONTS.medium,
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: normalizeWidth(5),
    marginHorizontal: normalizeWidth(10),
  },
});
