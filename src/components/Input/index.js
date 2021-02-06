import React from 'react';
import {View, Keyboard, TextInput} from 'react-native';
import {styles} from './styles';
import {AppText} from '../../components';
import PropTypes from 'prop-types';
import {COLORS} from '../../common';

const Input = ({
  placeholder,
  maxLength,
  size,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  style,
  textInputStyle,
  errorMessage,
  placeholderTextColor,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...props}
        style={[styles.textInput, textInputStyle]}
        placeholder={placeholder}
        maxLength={maxLength}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={placeholderTextColor || COLORS.white}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry || false}
        keyboardType={keyboardType || 'default'}
        returnKeyType={returnKeyType}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <AppText style={{color: COLORS.red}}>{errorMessage}</AppText>
    </View>
  );
};

Input.propTypes = {
  size: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  errorMessage: PropTypes.string,
};

export {Input};
