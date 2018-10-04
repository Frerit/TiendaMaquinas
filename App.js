import React from 'react';
import Login from './app/scenes/Login'
import {Tabs}  from './app/navigation'
import { createSwitchNavigator } from 'react-navigation'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <SwitchNavigator/>
    );
  }
}

export const SwitchNavigator = createSwitchNavigator( {
  Login: Login,
  Tabs: Tabs,
}, {
  initialRouteName: 'Login'
});
