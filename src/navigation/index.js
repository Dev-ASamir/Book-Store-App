import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './RootNavigation';

const AppContainer = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

export default AppContainer;
