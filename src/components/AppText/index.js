import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {STYLES, COLORS, FONTS} from '../../common';

const AppText = ({children, style, ...rest}) => {
  return (
    <Text style={[STYLES.normalText, styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...FONTS.small,
    textAlign: Platform.OS === 'ios' ? 'left' : null,
    color: COLORS.black,
  },
});

export {AppText};
