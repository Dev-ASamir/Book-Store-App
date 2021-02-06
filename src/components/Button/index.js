import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../common';
import {AppText} from '../AppText';
import PropTypes from 'prop-types';
import {normalizeHeight, normalizeWidth} from '../../utils';
import FastImage from 'react-native-fast-image';
let buttonBgColor = COLORS.white,
  buttonTxtColor = COLORS.black;

const Button = ({
  onPress,
  textStyle,
  children,
  buttonColor,
  style,
  loading,
  spinnerSize,
  spinnerColor,
  image,
  imageName,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.buttonContainer, {backgroundColor: buttonBgColor}, style]}>
      {loading ? (
        <ActivityIndicator
          size={spinnerSize || 'small'}
          color={spinnerColor || COLORS.white}
        />
      ) : (
        <View style={{flexDirection: 'row'}}>
          <AppText
            style={[styles.buttonText, {color: buttonTxtColor}, textStyle]}>
            {children}
          </AppText>
          {image && (
            <FastImage
              source={imageName}
              style={styles.image}
              resizeMode={'contain'}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string,
  image: PropTypes.bool,
  imageName: PropTypes.string,
};

export {Button};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    paddingHorizontal: normalizeWidth(10),
    color: COLORS.white,
    backgroundColor: 'transparent',
  },
  image: {
    width: normalizeWidth(35),
    height: normalizeHeight(35),
  },
});
