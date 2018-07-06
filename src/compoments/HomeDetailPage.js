/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import BasePage from "./BasePage";
import FakeNavBar from "../weight/FakeNavBar";

export default class HomeDetailPage extends BasePage {
    render() {
        const {navigation } = this.props;
        return (
            <FakeNavBar title={'二级页面'} navigation={navigation}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to 二级页面，二级页面!
                </Text>
                <Text style={styles.instructions}>
                    二级页面，二级页面
                </Text>
            </View>
            </FakeNavBar>
        );
    }

}

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
        backgroundColor:'red'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
