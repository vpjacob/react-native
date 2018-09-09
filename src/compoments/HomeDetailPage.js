/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ART
} from 'react-native';
import BasePage from "./BasePage";
import FakeNavBar from "../weight/FakeNavBar";
import Wedge from './Wedge'
const {Surface, Shape, Path} = ART;
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
        // return(
        //     <View style={styles.container}>
        //         <ART.Surface width={150} height={150} style={{backgroundColor:'red'}}>
        //             <Wedge
        //                 outerRadius={50}
        //                 startAngle={0}
        //                 endAngle={60}
        //                 originX={25}
        //                 originY={50}
        //                 fill="blue"/>
        //
        //             <Wedge
        //                 outerRadius={50}
        //                 startAngle={60}
        //                 endAngle={90}
        //                 originX={25}
        //                 originY={50}
        //                 fill="black"
        //             />
        //             <Wedge
        //                 innerRadius={40}
        //                 outerRadius={50}
        //                 startAngle={90}
        //                 endAngle={360}
        //                 originX={25}
        //                 originY={50}
        //                 fill="green"
        //             />
        //
        //
        //
        //
        //         </ART.Surface>
        //     </View>
        // )



console.log('----',this.props.homeDetail);


        // const path = Path()
        //     .moveTo(1,1)
        //     .lineTo(300,1);
        const text = `请求回来的数据：ip:${this.props.homeDetail.ip} city:${this.props.homeDetail.city}`;
        return (
            <FakeNavBar title={'二级页面'} navigation={this.props.navigation}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to 二级页面，二级页面!
                </Text>
                <Text style={styles.instructions}>
                    二级页面，二级页面{appConfig.DEVICE_UID}
                </Text>
                <Text style={styles.instructions}>
                    {text}
                </Text>
                <ART.Surface width={150} height={150} style={{backgroundColor:'red'}}>
                    <Wedge
                        outerRadius={50}
                        startAngle={0}
                        endAngle={60}
                        originX={25}
                        originY={50}
                        fill="blue"/>

                    <Wedge
                        outerRadius={50}
                        startAngle={60}
                        endAngle={90}
                        originX={25}
                        originY={50}
                        fill="black"
                    />
                    <Wedge
                        innerRadius={40}
                        outerRadius={50}
                        startAngle={90}
                        endAngle={360}
                        originX={25}
                        originY={50}
                        fill="green"
                    />




                </ART.Surface>




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
