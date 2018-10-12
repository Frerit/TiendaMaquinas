import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {View, FlatList, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import CardHome from "./component/card-home";
import firebase from "react-native-firebase";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
      dataSource: []
    };
  }

  componentDidMount() {
    let item = [];
    firebase.database().ref('history').on('value', (data) => {
      data.forEach((todata) => {
        console.log(todata.val());
        item.push({
          _id: todata.key,
          user: todata.val().user,
          video: todata.val().video,
          fecha: todata.val().fecha,
        })
        console.log(item);
      });
     this.saveUser(item);
    })
  }

  saveUser(data) {
    this.setState({
      dataSource: data
    })
  }

  _keyExtractor = item => item._id.toString();

  _renderItem = ({item}) => (
    <CardHome item={item}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' &&
        <StatusBar
          translucent={true}
          backgroundColor="#30225e"
        />
        }
        <View style={styles.nabvarHome} >
          <Icon name="md-menu" size={30} color="#fff"  onPress={ () => this.props.navigation.openDrawer() }  />
          <View style={styles.inconsleft}>
            <Icon name="md-search" style={styles.search} size={20} color="#fff" />
            <Icon name="md-more" size={30} color="#fff" />
          </View>
        </View>
        <View style={styles.flatl}>
          <FlatList
            data={this.state.dataSource}
            showsVerticalScrollIndicator={false}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  search: {
    marginTop: 5,
  },
  flatl: {
    paddingTop: 10,
  },
  nabvarHome :{
    backgroundColor: '#30225e',
    height: 50,
    marginTop: 20,
    paddingBottom: 0,
    padding: 10,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inconsleft: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  text:{
    color: 'white',
    fontSize: 30,
  }
});

export default Home;
