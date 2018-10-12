import {  StackNavigator, TabNavigator, DrawerNavigator, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome'
import {createBottomTabNavigator} from 'react-navigation-tabs'

//Tabs
import Home from "../scenes/Home";
import Catalog from "../scenes/Catalog";
import Setting from "../scenes/Setting";


export const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
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
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icons name="sliders" size={24} color={tintColor} ></Icons>
    }},
},{
  order: ['Home', 'Catalog', 'Setting'],
  initialRouteName: 'Home',
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

