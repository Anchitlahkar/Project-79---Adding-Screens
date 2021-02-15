import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RequestBookScreen from './screens/HomeScreen';
import DonatetBookScreen from './screens/ExchangeScreen';
import LoginScreen from './screens/WelcomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {TabNavigator} from './components/tabNavigator'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: LoginScreen,
  TabNavigator: TabNavigator,
});

const AppContainer = createAppContainer(AppNavigator);
