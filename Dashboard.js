import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import {ScrollView} from 'react-native';

type Props = {};
export default class Dashboard extends Component<Props> {
  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {
    return (
      <ScrollView>
        <Container>
          <Content contentContainerStyle={{margin: 20, flex: 1}}>
            <Text>Welcome</Text>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}