import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import LoginScreen from './screens/LoginScreen'
import SignUp from "./screens/SignUpScreen";
// import { createSwitchNavigator, createAppContainer } from "react-navigation";

class App extends Component {
  render() {
    return (
      <SignUp />
    );
  }
}

// const LoginSwitch = createSwitchNavigator({
//   SignUp: SignUp,
//   Login: LoginScreen
// })

// const AppContainer = createAppContainer(LoginSwitch)

export default App;
