import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.itemSecionNav}>
            <Text style={styles.textItemNav} onPress={() => this.props.navigation.navigate('stack')}> Stack</Text>
          </View>
          <View>
            <Text> Stack</Text>
          </View>
          <View>
            <Text> Stack</Text>
          </View>
          <View>
            <Text> Stack</Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text> Power by ETN</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#CCC',
  },
  itemSecionNav:{
    backgroundColor: '#000',
  },
  textItemNav:{

  },
  footerContainer: {
    fontSize: 18,
    padding: 15
  },

})
