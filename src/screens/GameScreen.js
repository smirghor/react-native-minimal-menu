import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class GameScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Game Screen!</Text>
          <Icon name="ios-person" size={30} color="#4F8EF7" />
        </View>
      );
    }
  }