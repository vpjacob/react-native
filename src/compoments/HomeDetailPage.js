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
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
// import DeviceInfo from 'react-native-device-info';
// import actions from '../actions/actionIndex';
import * as appConfig from '../config/appConfig';

export default class HomeDetailPage extends BasePage {

    componentDidMount(){
        const {actions} = this.props;
        this.testFun();
        actions.testAction({},{
            cbError: ({ code, msg }) => {
                console.log('');
            },
            cbSuccess: ({data}) => {
                console.log('====',data); 
            }
        })
        
    }

    testFun = () => {
        console.log('hhhhh');
    };

    render() {
        const {navigation ,homeDetail} = this.props;
        return (
            <FakeNavBar title={'二级页面'} navigation={navigation}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to 二级页面，二级页面!
                </Text>
                <Text style={styles.instructions}>
                    二级页面，二级页面{appConfig.DEVICE_UID}
                </Text>
                <Svg width="200" height="200">
    {/*<Circle*/}
        {/*cx="50"*/}
        {/*cy="50"*/}
        {/*r="45"*/}
        {/*stroke="blue"*/}
        {/*strokeWidth="5.5"*/}
        {/*fill="green"*/}
    {/*/>*/}
                    {/*<Path*/}
                    {/*d="M10 10 L25 30 L100 50 A50 50"*/}
                    {/*fill="none"*/}
                    {/*stroke="red"*/}
                    {/*/>*/}

                    <Path d="M60,35 l 50,-25
           a25,25 -30 0,1 50,-25 l 50,-25
           a25,50 -30 0,1 50,-25 l 50,-25
           a25,75 -30 0,1 50,-25 l 50,-25
           a25,100 -30 0,1 50,-25 l 50,-25"
                          fill="none" stroke="red" stroke-width="5" />

                </Svg>
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
