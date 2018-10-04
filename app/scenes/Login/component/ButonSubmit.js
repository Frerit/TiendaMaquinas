import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import firebase from 'react-native-firebase';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
} from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

class ButtonSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  executeNavigate = () => {
    this.props.navigation.navigate('Tabs')
    this.setState({isLoading: false});
    this.buttonAnimated.setValue(0);
    this.growAnimated.setValue(0);
  }

  loginFire = () => {
    console.log("---- ", "llego" )
    firebase.auth()
      .signInAndRetrieveDataWithEmailAndPassword(this.props.email, this.props.pass)
      .then(( user ) => {
        setTimeout(() => {
          this._onGrow();
         }, 2000);

        setTimeout(() => {
          console.log("Cargo")
          this.executeNavigate();
          }, 2300);
      })
      .catch(function(error) {
        console.log("No Se logio")
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    console.log("Se salio")
  }


  _onPress() {
    if (this.props.email !== '' || this.props.email !== "" && this.props.pass !== "" || this.props.pass !== '') {
      if (this.state.isLoading) return;
      this.setState({isLoading: true});
      Animated.timing(this.buttonAnimated, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
      }).start();

      console.log("---- ", "llego" )
      this.loginFire();

    } else {
      Alert.alert("Error","Faltan campos por completar")
    }
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress} >
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>

      </View>
    );
  }
}

export default withNavigation(ButtonSubmit);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -88,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b72e66',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 88,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#b72e66',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 90,
    backgroundColor: '#b72e66',
  },
  text: {
    color: '#ffffff',
    zIndex: 99,
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});
