import React from 'react';
import Login from './app/scenes/Login'
import {Tabs}  from './app/navigation'

import RNLanguage from 'react-native-languages';
import i18n from './app/utils/i18n';

import {createSwitchNavigator, DrawerNavigator} from 'react-navigation'
import Camera from "./app/scenes/Setting/camera";
import Setting from "./app/scenes/Setting"
import SideMenu from "./app/navigation/sidemenu";

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

const Drawer = DrawerNavigator({
  Camera: { screen: Camera },
  Tabs: { screen: Tabs },
  Settings: Setting,
}, {
  drawerWidth: 200,
  contentComponent: SideMenu,
});


export const SwitchNavigator = createSwitchNavigator( {
  Login: Login,
  Tabs: Tabs,
  Drawer: Drawer
}, {
  initialRouteName: 'Login'
});
