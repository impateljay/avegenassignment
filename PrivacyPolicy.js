import React, {Component} from 'react';
import {Button, Container, Content, Input, Item, Label, Text} from 'native-base';
import {ScrollView} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

export default class PrivacyPolicy extends Component {
  static navigationOptions = {
    title: 'Privacy Policy',
  };

  handleAgreeClick = () => {
    this.props.navigation.navigate('Register')
  };

  handleDisagreeClick = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Login'})],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <Content contentContainerStyle={{margin: 20, flex: 1}}>
            <Text>Privacy Policy Text</Text>
            <Button block danger style={{marginTop: 20}} onPress={this.handleAgreeClick}>
              <Text>I agree</Text>
            </Button>
            <Button full danger bordered style={{marginTop: 20}} onPress={this.handleDisagreeClick}>
              <Text>I disagree</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}