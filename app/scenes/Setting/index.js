import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { View, Text, StyleSheet, Image, TouchableOpacity }  from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Camera from "./camera";

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colums}>
          <View style={styles.rows}>
            <View style={styles.image_perfil}>
             <View style={styles.marco}>

             </View>
              <TouchableOpacity style={styles.image_camera}
                                onPress={() => {  this.props.navigation.navigate('Camera')  }}
                                 >
                  <Icon name="md-camera" size={40} color="#3117B7"/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const SettingInitial = createStackNavigator(
  {
    SettingInitial: {
      screen: Setting,
    }
  }
);

export default createSwitchNavigator(
  {
    Setting: {
      screen: SettingInitial,
    },
    Camera: {
      screen: Camera,
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcccf0'
  },
  colums: {
    flex: 1,
    flexDirection: 'column'
  },
  rows: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  image_perfil: {
    marginTop: 50
  },
  marco: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#575451'
  },
  image_camera: {
    marginTop: -30,
    position: 'relative',
    right: -100,
    bottom: 0,
  }
})
