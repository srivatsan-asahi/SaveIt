/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/homescreen';
import SavingComponent from './screens/savingcompscree';


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Goal" component={SavingComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};




export default App;
