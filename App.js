import React, {Component} from 'react';
import Login from "./Login";
import {createAppContainer, createStackNavigator} from "react-navigation";
import PrivacyPolicy from "./PrivacyPolicy";
import Register from "./Register";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {screen: Login},
  PrivacyPolicy: {screen: PrivacyPolicy},
  Register: {screen: Register},
  Dashboard: {screen: Dashboard}
});

export default createAppContainer(AppNavigator);