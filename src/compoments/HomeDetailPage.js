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
    ART,
    Image
} from 'react-native';
import BasePage from "./BasePage";
import FakeNavBar from "../weight/FakeNavBar";
import Wedge from './Wedge'
const {Surface, Shape, Path} = ART;
import Swiper from 'react-native-swiper';
// import DeviceInfo from 'react-native-device-info';
// import actions from '../actions/actionIndex';
import * as appConfig from '../config/appConfig';
import axios from 'axios';
import * as c from "../constants/constantsIndex";
import * as _ from "lodash";
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
        });

        // axios.get('http://www.ppke.cn/api/execscript',{
        //     params: {
        //         "script":"mobile.business.business","needTrascation":false,"funName":"findCompanyType"
        //     }})
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


        actions.bannerData({ "script":"mobile.business.product","needTrascation":false,"funName":"queryCarouselList"},{cbError:(code,msg)=>{

            },cbSuccess:(data)=>{
           let js = JSON.parse(data.formDataset.carouselList)
            console.log('====jss',js)
        }})

        
    }

    testFun = () => {
        console.log('hhhhh');
    };
    render() {


_.map(this.props.homeDetail.carouselList,(item,i)=>{
    console.log(item.image_url+i+"---===")
})


        console.log('----',this.props.homeDetail);

        const text = `请求回来的数据：ip:${this.props.homeDetail.ip} city:${this.props.homeDetail.city}`;
        return (
            <FakeNavBar title={'二级页面'} navigation={this.props.navigation}>
            <View style={styles.container}>
                <View style={{width:c.width,height:c.fixPx(320)}}>
                    {this.props.homeDetail.carouselList?
                        <Swiper
                                loop={true}
                                autoplay={true}
                                autoplayTimeout={5}
                                horizontal={true}
                                removeClippedSubviews={false}
                                dot={<View style={{
                                    backgroundColor: 'rgba(156,156,156,.6)',
                                    width: c.fixPx(12),
                                    height: c.fixPx(12),
                                    borderRadius: c.fixPx(6),
                                    marginLeft: c.fixPx(6),
                                    marginRight: c.fixPx(6),

                                }}/>}
                                activeDot={<View style={{
                                    backgroundColor: 'rgba(255,255,255,.9)',
                                    width: c.fixPx(12),
                                    height: c.fixPx(12),
                                    borderRadius: c.fixPx(6),
                                    marginLeft: c.fixPx(6),
                                    marginRight: c.fixPx(6),
                                }}/>}
                        >
                            {this.props.homeDetail.carouselList&&this.props.homeDetail.carouselList.map((item,i)=>{

                                return(
                                    <View style={{flex:1}}>
                                        <Image resizeMode='center' style={{width:c.width,height:c.fixPx(280)}} source={{url:item.image_url}}/>
                                        <Text style={{textAlign:'center'}}>这是第+{i+1}+张图片</Text>
                                    </View>
                                )
                            })}
                        </Swiper>
                        :null}
                </View>



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
