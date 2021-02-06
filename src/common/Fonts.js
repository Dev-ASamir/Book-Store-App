import {Platform, I18nManager} from 'react-native';
const FONT_FAMILY = I18nManager.isRTL ? 'Montserrat' : 'Cairo-Regular';

export const FONTS = {
  tiny: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
  },
  small: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
  },
  medium: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
  },
  large: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
  },
  extraLarge: {
    fontFamily: FONT_FAMILY,
    fontSize: 24,
  },
  boldFont: {
    fontFamily: Platform.OS === 'android' ? 'Cairo-Bold' : 'Cairo',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  normalFont: {
    fontFamily: 'Cairo-Regular',
  },
};

export const STYLES = {
  boldText: {
    fontWeight: 'bold',
    ...FONTS.extraLarge,
    textAlign: 'right',
  },
  normalText: {
    ...FONTS.extraLarge,
    textAlign: 'right',
  },
};
