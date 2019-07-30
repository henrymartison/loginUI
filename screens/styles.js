const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
  backgroundColor: 'rgb(38,37,51)'
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
  color: '#fff'
},
loginFormView: {
//   flex: 3,
  backgroundColor: 'rgb(58,55,75)',
  justifyContent: 'center',
  marginTop: 150,
  marginHorizontal: 30,
  borderRadius: 10,
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 23,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 20,
  marginBottom: 10,

},
loginButton: {
  backgroundColor: 'rgb(179,53,229)',
  borderRadius: 20,
  height: 45,
  width: 90,
  marginTop: 10,
  marginHorizontal: 110,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20
},
fbLoginButton: {
  height: 45,
  marginTop: 10,
  backgroundColor: 'transparent',
},
};
