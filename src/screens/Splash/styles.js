import {StyleSheet} from 'react-native';
import {normalizeHeight} from '../../utils';
import {COLORS} from '../../common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: normalizeHeight(24),
    fontWeight: 'normal',
    textAlign: 'center',
    color: COLORS.black,
  },
});

export default styles;
