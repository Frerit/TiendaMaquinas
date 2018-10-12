import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Dimensions from "react-native/Libraries/Utilities/Dimensions";
import PlayPause from "./control-play";
import Video from "react-native-video";
import ControlsVideo from "./control-video";

const DEVICE_WIDTH = Dimensions.get('window').width;

class CardHome extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        paused : true,
    };
  }


  render() {
    return (
      <TouchableOpacity style={styles.item} >
        <View  style={styles.colums}>
          <View style={styles.rows }>
            <View style={styles.imageRoud} />
            <View style={styles.rows}>
              <Text style={{marginTop: 5}}> {this.props.item.user} </Text>
              <Text> 10min  </Text>
            </View>
          </View>
          <View style={styles.rows}>
            <View style={styles.convideo} >
              <View>
                <View style={styles.videoLayout}>
                  <Video
                    source={ this.props.video }
                    onError={this.videoError}
                    style={styles.video}
                    onLoad={this.onLoadVideo}
                    resizeMode="cover"
                    paused={this.state.paused} >

                  </Video>
                </View>
                <View style={styles.ovelayVideo}>
                  <View>
                    <PlayPause pause={this.state.paused} onPress={this.playPause}/>
                  </View>
                </View>
              </View>

            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: 'rgb(75, 89, 101)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    flexDirection: 'row',
  },
  colums: {
    flex: 1,
    flexDirection: 'column'
  },
  rows: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  imageRoud: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#767376",
    marginRight: 10,
    marginBottom: 5,
  },
  convideo: {
    width: DEVICE_WIDTH - 60,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  videoLayout: {
    borderWidth: 1,
    borderColor: "#000",
    paddingBottom: '56.25%'
  },
  ovelayVideo: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    top:0,
    right: 0,
    left: 0,
    height: 50,
    bottom: -110,
  }
})

 export default CardHome;
