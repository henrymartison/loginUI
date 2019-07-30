import React, { Component } from "react";

import styles from "./styles";
import {SafeAreaView, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class SignUp extends Component {

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
              <TextInput placeholder="Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <TextInput placeholder="Phone number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>

              <Button rounded style={styles.loginButton}>
                <Text style={{textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: '600'}}>SignUp</Text>
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
