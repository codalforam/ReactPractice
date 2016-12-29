/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ListView,
  NavigatorIOS
} from 'react-native';

var APGoogleBookList = require('./APGoogleBookList.js');

/** Stylesheet Configuration */
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#CDE8F9',
  },
  view: {
    backgroundColor: '#CDE8F9',
    margin: 40,
  },
  navigation: {
    flex: 1,
    backgroundColor: '#CDE8F9',
    color: '#dac6ad',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000000',
    margin: 35,
  },
  button: {
    justifyContent: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/** Google Book List Class */
class GoogleBookList extends Component {

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.view}>
          <Text style={styles.welcome}>
            Welcome to Google Store!
        </Text>

        </View>
        
        <View style={styles.view}>
          <TouchableHighlight
            underlayColor='#99d9f4'>
            <Text style={styles.button}
              onPress={this.onGoPressed.bind(this)} >
              Tap here to GO TO 'Google Book List'
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  onGoPressed() {
    this.props.navigator.push({
      title: 'Book List',
      component: APGoogleBookList,
    });
  }
}

/** Default Class */
export default class AwesomeProject extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Google Book List',
          component: GoogleBookList,
        }} />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
