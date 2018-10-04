import {  StackNavigator, TabNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome'
import {createBottomTabNavigator} from 'react-navigation-tabs'

//Tabs
import Tab1 from './tab-1';
import Tab3 from './tab-3';
import Catalog from "../scenes/Catalog";


export const Tabs = createBottomTabNavigator({
  Tab1: {
    screen: Tab1,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icons name="home" size={24} color={tintColor} ></Icons>
    }
  },
  Catalog : {
    screen: Catalog,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icons name="shopping-cart" size={24} color={tintColor} ></Icons>
    }
},
  Tab3: {
    screen: Tab3,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icons name="sliders" size={24} color={tintColor} ></Icons>
    }},
},{
  order: ['Tab1', 'Catalog', 'Tab3'],
  initialRouteName: 'Catalog',
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    activeTintColor: "#ffaf1a",
    inactiveTintColor: "#868683",
    labelStyle:  {
      fontSize: 14,
    },
    style:{
      backgroundColor: '#0000'
    }
  }
});

