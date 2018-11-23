import React, {Component} from 'react';
import {Button, Container, Content, Input, Item, Label, Text} from 'native-base';
import {Alert, ScrollView} from 'react-native';
import Firebase from 'firebase';
import Loader from './Loader';
import {NavigationActions, StackActions} from 'react-navigation';

export default class Register extends Component {
  static navigationOptions = {
    title: 'Register',
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

  handleRegisterClick = () => {
    this.setState({loading: true});
    Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({loading: false});
        Alert.alert(
          'Success',
          "Registerd Successfully",
          [
            {
              text: 'OK', onPress: () => {
                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({routeName: 'Login'})],
                });
                this.props.navigation.dispatch(resetAction);
              }
            },
          ],
          {cancelable: false}
        );
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
      });
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
            <Button full danger bordered style={{marginTop: 20}} onPress={this.handleRegisterClick}>
              <Text>Register</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}