import React, {useEffect} from 'react';
import {View} from 'react-native';
import {AppText} from '../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Splash = () => {
  const navigation = useNavigation();
  const {userData} = useSelector((state) => ({
    userData: state.user,
  }));
  useEffect(() => {
    setTimeout(() => {
      startup();
    }, 100);
  }, []);

  const startup = () => {
    setTimeout(() => {
      if (userData && userData.userProfile && userData.userProfile.id) {
        navigation.navigate('Auth', {screen: 'Home'});
      } else {
        navigation.reset({routes: [{name: 'Auth'}]});
      }
    }, 2500);
  };
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{'Book Store'}</AppText>
    </View>
  );
};

export default Splash;
