/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Container, Content, Input, Item, Label, Text} from 'native-base';
import {ScrollView, Alert} from 'react-native';
import Firebase from 'firebase';
import Loader from './Loader';
import {NavigationActions, StackActions} from "react-navigation";

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  async componentDidMount() {
    Firebase.initializeApp({
      apiKey: 'xyz',
      authDomain: 'xyz.firebaseapp.com',
      databaseURL: 'https://xyz.firebaseio.com',
      projectId: 'xyz',
      storageBucket: 'xyz.appspot.com',
      messagingSenderId: 'xyz'
    });
  }

  state = {
    email: '',
    password: '',
    loading: false,
  };

  handleLoginClick = () => {
    this.setState({loading: true});
    Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({loading: false});
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'Dashboard'})],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        this.setState({loading: false});
        Alert.alert(
          'Error',
          error.message,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false}
        )
      })
  };

  handleRegisterClick = () => {
    this.props.navigation.navigate('PrivacyPolicy')
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <Content contentContainerStyle={{margin: 20, flex: 1}}>
            <Loader loading={this.state.loading}/>
            <Item floatingLabel style={{marginBottom: 10, marginTop: 10}}>
              <Label>Email ID</Label>
              <Input onChangeText={(value) => this.setState({email: value})}
                     value={this.state.email}/>
            </Item>
            <Item floatingLabel style={{marginTop: 20, marginBottom: 20}}>
              <Label>Password</Label>
              <Input secureTextEntry={true}
                     onChangeText={(value) => this.setState({password: value})}
                     value={this.state.password}/>
            </Item>
            <Button block danger style={{marginTop: 20}} onPress={this.handleLoginClick}>
              <Text>Login</Text>
            </Button>
            <Button full danger bordered style={{marginTop: 20}} onPress={this.handleRegisterClick}>
              <Text>Register</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}