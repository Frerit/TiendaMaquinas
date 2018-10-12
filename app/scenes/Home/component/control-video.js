import React from 'react';
import { View, StyleSheet } from 'react-native';

const ControlsVideo = props => (
  <View style={styles.container}>
    { props.children }
  </View>
);

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, .2)',
  }
})

export default ControlsVideo;
