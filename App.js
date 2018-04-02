/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={ao.bao}>

        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 200, height:100}}
        />
        <Text style={ao.tieude}>
          Welcome to React Native!
          Hello world!
          Chao Anh tu!
        </Text>
        <Text style={ao.tomtat}>
          My name is Nguyen Van Tu, lop d10cnpm,ok ok
        </Text>
        <Text style={ao.start}>
          i learnning dien luc university
        </Text>
      </View>
    );
  }
}

var ao = StyleSheet.create({
  tieude: {
    backgroundColor: 'blue',
    color: 'red'
  },
  bao: {
    backgroundColor: 'pink',
    width:200,
    height:300,
    marginTop:50,
    marginLeft:50,
    padding:20
  },
  tomtat: {
    backgroundColor: 'green',
    color:'yellow'
  },
  start: {
    backgroundColor: 'gray',
    color: 'black'
  }

});

