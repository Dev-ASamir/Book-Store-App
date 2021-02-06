import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import {common_nav_options} from './styles';
import {useNavigation} from '@react-navigation/native';
import {LeftHeader} from './LeftHeader';
import {useDispatch} from 'react-redux';

const AuthStackNav = createStackNavigator();
const AuthStack = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <AuthStackNav.Navigator screenOptions={common_nav_options}>
      <AuthStackNav.Screen name="Login" component={Login} />
      <AuthStackNav.Screen name="SignUp" component={SignUp} />
      <AuthStackNav.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <LeftHeader
              title={'Favorite'}
              color={'tomato'}
              onPress={() => navigation.navigate('Favorite')}
            />
          ),
        }}
      />
      <AuthStackNav.Screen
        name="Favorite"
        headerTintColor={'red'}
        component={Favorite}
        options={{
          headerRight: () => (
            <LeftHeader
              title={'Log Out'}
              color={'black'}
              onPress={() => {
                navigation.reset({routes: [{name: 'Auth'}]});
                dispatch({type: 'USER_PROFILE', payload: {}});
              }}
            />
          ),
        }}
      />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
