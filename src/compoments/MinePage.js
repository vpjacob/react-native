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
  View
} from 'react-native';
import BasePage from "./BasePage";
import {showMsg,showLoading,hideLoading} from '../utils/common';

export default class MinePage extends BasePage {
  render() {
    return (
          <View style={styles.container} >
            <Text style={styles.welcome}>
              Welcome to MinePage!
            </Text>
            <Text style={styles.instructions} onPress={() => {showLoading();}}>
                我的，我的，我的，我的
            </Text>
          </View>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
