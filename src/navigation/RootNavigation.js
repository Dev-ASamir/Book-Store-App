import React from '../../node_modules/react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import AuthStack from './AuthStack';

const RootStackNav = createStackNavigator();
const RootStack = () => (
  <RootStackNav.Navigator headerMode={'none'} initialRouteName={'Splash'}>
    <RootStackNav.Screen name="Splash" component={Splash} />
    <RootStackNav.Screen name="Auth" component={AuthStack} />
  </RootStackNav.Navigator>
);

export default RootStack;
