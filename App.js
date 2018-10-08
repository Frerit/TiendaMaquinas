import React from 'react';
import Login from './app/scenes/Login'
import {Tabs}  from './app/navigation'

import RNLanguage from 'react-native-languages';
import i18n from './app/utils/i18n';

import { createSwitchNavigator } from 'react-navigation'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    console.disableYellowBox = true;
    RNLanguage.addEventListener('change', this.onChangeLanguage);
  }

  componentWillMount() {
    RNLanguage.addEventListener('change',this.onChangeLanguage);
  }

  onChangeLanguage = ( { language } ) => {
    i18n.locale = language;
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
