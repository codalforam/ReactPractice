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


var APGoogleBookDetail = require('./APGoogleBookDetail.js');

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
    listSeparator: {
        backgroundColor: '#000000'
    }
});

/** Default Class */
export default class APGoogleBookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                    isLoading: false
                });
            })
            .done();
    }

    render() {

        if (this.state.isLoading) {
            return this.renderLoadingView();
        }

        return (
            <View>
                <Text style={styles.welcome}>
                    Google Book List
	            </Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={() => <View style={{ height: 50, backgroundColor: '#b32401' }} />}
                    onEndReached={() => console.log('End')}
                    renderSeparator={(sectionID, rowID) =>
                        <View
                            style={styles.listSeparator}
                            key={`${sectionID} - ${rowID}`}
                            />}

                    renderRow={this.renderRow.bind(this)}
                    style={styles.listView} />
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>
                    Please wait...
	            </Text>
            </View>
        );
    }

    renderRow(book) {
        return (

            <TouchableHighlight onPress={this.onRowPressed.bind(this, book)} >
                <View style={styles.container}>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{book.volumeInfo.title}</Text>
                        <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }

    onRowPressed(book) {
        this.props.navigator.push({
            title: 'Book Details',
            component: APGoogleBookDetail,
            passProps: { book: 'View'},
        });
    }
}

module.exports = APGoogleBookList;
