import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import DetailScreen from './src/screens/DetailScreen'

const navigator = createStackNavigator(
  {
      Search: SearchScreen,
      Detail: DetailScreen
  }
      ,{
      initialRouteName: 'Search',
      defaultNavigationOptions:{
        title: 'Businese Search'
      }
})

export default createAppContainer(navigator)