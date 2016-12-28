import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ListView
} from 'react-native';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class APGoolgeBookList extends Component {

  render() {
    return (
     <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
       
        <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
            <Text
              style={styles.button}
              //onPress={this.onGoPressed.bind(this)}
              >
             GO TO 'Google Book List'
            </Text>
          </TouchableHighlight>
      </View>
    );
  } 
}