import React, { Component } from "react";

import styles from "./styles";
import {SafeAreaView, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class LoginScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.containerView}>
        {/* <View>
          <Text>Log in</Text>
        </View> */}
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.formContainer}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
            {/* <Text style={styles.logoText}>Marvalinks</Text> */}
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <Text style={{paddingLeft: 25, color: 'rgb(96,94,109)'}}>Forgot Password?</Text>

              <Button rounded style={styles.loginButton}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: '600'}}>Login</Text>
              </Button>

            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#fff', paddingTop: 20}}> Or Sign in with </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
            <Button rounded style={{height: 50, width: 80, justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: '600'}}>Facebook</Text>
              </Button>
            <Button rounded style={{height: 50, width: 80, justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: '600'}}>Google</Text>
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

}
