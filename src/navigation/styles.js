import {StyleSheet, I18nManager} from 'react-native';
import {width, height, normalizeHeight, normalizeWidth} from '../utils';
import {COLORS} from '../common';

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: normalizeHeight(20),
    textTransform: 'uppercase',
    color: COLORS.black,
  },
  headerRightButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: normalizeWidth(10),
  },
  headerStyle: {
    height: height('12.7%'),
    backgroundColor: COLORS.white,
  },
  image: {
    width: normalizeWidth(18),
    height: normalizeHeight(13),
    transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}],
  },
  bottomIcon: {
    width: normalizeWidth(33),
    height: normalizeHeight(33),
    marginTop: normalizeHeight(10),
  },
  headerSidesContainerStyle: {
    paddingHorizontal: width('1.3%'),
  },
  labelStyle: {
    fontSize: normalizeHeight(18),
    color: COLORS.black,
  },
  tabContainerStyle: {
    height: normalizeHeight(60),
  },
  text: {
    fontSize: normalizeHeight(16),
    fontWeight: 'bold',
  },
});

export const common_nav_options = {
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitleStyle,
  headerStyle: styles.headerStyle,
  headerBackTitleVisible: false,
  headerRightContainerStyle: styles.headerSidesContainerStyle,
  headerLeftContainerStyle: styles.headerSidesContainerStyle,
  headerTintColor: COLORS.black,
};

export default styles;
