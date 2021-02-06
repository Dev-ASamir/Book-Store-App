import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {AppText} from '../components';

export const LeftHeader = ({color, onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.headerRightButtonStyle}>
      <AppText style={[styles.text, {color}]}>{title}</AppText>
    </TouchableOpacity>
  );
};
