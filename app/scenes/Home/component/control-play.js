import React from 'react';
import { TouchableHighlight, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'

const PlayPause = props =>  (
  <TouchableHighlight onPress={ props.onPress }>
    {
      props.pause ?
        <Icon style={styles.icons} name="md-play" size={30} color="#fff" /> :
        <Icon style={styles.icons} name="md-pause" size={30} color="#fff" />
    }
  </TouchableHighlight>
);

export default PlayPause;

const styles = StyleSheet.create({
  text: {
    color: "#fff"
  },
  icons: {
    marginLeft: 10,
    marginRight: 10,
  }
})
