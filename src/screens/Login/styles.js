import {StyleSheet} from 'react-native';
import {normalizeHeight} from '../../utils';
import {COLORS, FONTS} from '../../common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  createAcc: {
    ...FONTS.boldFont,
    fontSize: normalizeHeight(25),
    fontStyle: 'normal',
    lineHeight: normalizeHeight(47),
    letterSpacing: 0,
    textAlign: 'right',
    color: COLORS.blackTitle,
    marginTop: normalizeHeight(136),
    marginBottom: normalizeHeight(55),
    //marginRight: normalizeWidth(38),
  },
  nameTxt: {
    //fontFamily: "Cairo",
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: normalizeHeight(26),
    letterSpacing: 0,
    textAlign: 'right',
    color: COLORS.gray,
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    marginVertical: normalizeHeight(2),
    alignItems: 'center',
    alignContent: 'center',
    //width: normalizeWidth(337),
    height: normalizeHeight(45),
    borderRadius: 4,
    backgroundColor: COLORS.white,
    borderStyle: 'solid',
    borderColor: COLORS.lightBlueBorder,
    alignSelf: 'center',
  },
  buttonView: {
    marginTop: normalizeHeight(20),
    alignSelf: 'center',
    borderWidth: 1,
    height: normalizeHeight(50),
    borderRadius: 4,
    borderColor: COLORS.black,
    marginBottom: normalizeHeight(91),
  },
  priceText2: {
    paddingHorizontal: 11,
    textAlign: 'center',
    marginTop: 5,
    fontSize: normalizeHeight(16),
    fontStyle: 'normal',
    letterSpacing: 0,
    color: COLORS.white,
  },
  nameTxt2: {
    fontSize: normalizeHeight(14),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: normalizeHeight(26),
    letterSpacing: 0,
    textAlign: 'center',
    color: COLORS.gray,
  },
  nameTxt3: {
    fontSize: normalizeHeight(14),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: normalizeHeight(26),
    letterSpacing: 0,
    textAlign: 'center',
    color: COLORS.black,
  },
  nameTxtSec: {
    fontSize: normalizeHeight(14),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: normalizeHeight(26),
    letterSpacing: 0,
    textAlign: 'left',
    color: COLORS.gray,
  },
  forgetAcc: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  txtInput: {
    color: COLORS.black,
    textAlign: 'left',
    //flex: 1,
    fontSize: 17,
  },
});

export default styles;
