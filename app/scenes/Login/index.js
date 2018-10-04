import React, { Component } from 'react';
import {
  Text, View, Image, KeyboardAvoidingView,
  ImageBackground, TextInput, ScrollView,
  StyleSheet, TouchableOpacity, Keyboard
}
from 'react-native';
import firebase from 'react-native-firebase'

import Dimensions from "react-native/Libraries/Utilities/Dimensions";
import PropTypes from "prop-types";

// Image
import bgSrc from "../../../assets/fondoapps.png";
import ButtonSubmit from "./component/ButonSubmit";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAutenticate: false,
      loading: true,
      user: null,
      showImage: true,
      heighI: 80,
      email: '',
      pass: '',
    };
  }
  removeView(){
    this.setState({
      showView: false,
    });
  }
  showView(){
    this.setState({
      showView: true,
    });
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loading: false, user });
      if (this.state.user != null ){
        this.props.navigation.navigate("Tabs");
      }
    });

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
   // this.removeView()
  }

  _keyboardDidHide () {
    // this.showView();
  }


  render() {
    return (
      <ImageBackground source={bgSrc} style={ styles.wallpaper }>
        { this.state.showImage && (
          <View style={styles.contentLogo} >
            <Image source={ require('./../../../assets/RNFirebase.png')} style={styles.imageLogo} />
            <Text style={styles.textLogo}>TIENDA MAQUINAS</Text>
          </View>
        )}
        <KeyboardAvoidingView keyboardVerticalOffset={0}
                              behavior={'padding'}
                              style={styles.container }>

            <View style={styles.inputWrapper}>
            <Image source={ require('./../../../assets/username.png') } style={styles.inlineImg} />
            <TextInput style={styles.input}
                       placeholder={"Usuario"}
                       secureTextEntry={this.props.secureTextEntry}
                       autoCorrect={this.props.autoCorrect}
                       autoCapitalize={this.props.autoCapitalize}
                       returnKeyType={this.props.returnKeyType}
                       placeholderTextColor="white"
                       onChangeText={ email => this.setState({ email }) }
                       value={this.state.email}
                       underlineColorAndroid="transparent"/>
          </View>
          <View style={styles.inputWrapper}>
            <Image source={ require('./../../../assets/password.png') } style={styles.inlineImg} />
            <TextInput style={styles.input}
                       placeholder={"Contraseña"}
                       secureTextEntry={this.props.secureTextEntry}
                       autoCorrect={this.props.autoCorrect}
                       autoCapitalize={this.props.autoCapitalize}
                       returnKeyType={this.props.returnKeyType}
                       placeholderTextColor="white"
                       onChangeText={ pass => this.setState({ pass }) }
                       value={this.state.pass}
                       underlineColorAndroid="transparent"/>
          </View>
          <TouchableOpacity activeOpacity={0.7}
                            style={styles.btnEye}
                            onPress={this.showPass} >

            <Image source={ require('./../../../assets/eye_black.png')} style={styles.iconEye} />

          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.containerOpcion}>
          <Text style={styles.text}>Crear Cuenta</Text>
          <Text style={styles.text}>¿Olvido su Contraseña?</Text>
        </View>
       <ButtonSubmit email={this.state.email} pass={this.state.pass} />
      </ImageBackground>
    );
  }
}

export default Index;

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentLogo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    width: 80,
    height: 80,
  },
  textLogo: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    flexGrow:1,
    alignItems: 'center',
  },
  wallpaper: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  inputWrapper: {
    flex: 1,
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  containerOpcion: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
