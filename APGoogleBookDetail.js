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

/** Stylesheet Configuration */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDE8F9'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CDE8F9',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#b32401',
        color: '#dac6ad',
        margin: 20,
    },
    instructions: {
        textAlign: 'left',
        color: '#b32401',
        marginBottom: 5,
    },
    thumbnail: {
        width: 100,
        height: 50,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        margin: 10
    },
    title: {
        fontSize: 18,
        marginBottom: 8,
        color: '#b32401',
    },
    author: {
        color: '#b32401',
        fontSize: 12,
        marginBottom: 8,
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listView: {
        backgroundColor: '#F5FCFF'
    },
});

/** Default Class */
export default class APGoogleBookDetail extends Component {

    render() {
        return (
          <View style={styles.container}>
                <Text>any text</Text>
            </View>
        );
    }
}

module.exports = APGoogleBookDetail;
