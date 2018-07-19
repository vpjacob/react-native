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


export default class RootPage extends BasePage {
  render() {
    return (
          <View style={styles.container} >
            <Text style={styles.welcome} onPress={this.clickAction}>
              Welcome to RootPage!
            </Text>
              <Text style={styles.welcome} onPress={this.clickAction}>
                  点击进入主页
              </Text>
          </View>
    );
  }

  clickAction = () => {
      this.replaceRoute('route.Main')
  }

    /**将当前路由替换为目标路由，可能会造成路由栈中路由重复的问题*/
    replaceRoute=(routeName,params)=>{
        const {replace} = this.props.navigation;
        let action = null;
        replace(routeName, params, action)
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
