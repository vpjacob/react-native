/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import BasePage from "./BasePage";
import * as c from "../constants/constantsIndex";
import Swiper from 'react-native-swiper';
import * as _ from 'lodash';
export default class HomePage extends BasePage {

    componentDidMount() {
        const {actions} = this.props;
        actions.bannerData({
            "script": "mobile.business.product",
            "needTrascation": false,
            "funName": "queryCarouselList"
        }, {
            cbError: (code, msg) => {

            }, cbSuccess: (data) => {
                let js = JSON.parse(data.formDataset.carouselList)
                console.log('====jss', js)
            }
        });

       actions.iconList({"script":"mobile.business.business","needTrascation":false,"funName":"findCompanyType"},{
            cbSuccess:(data)=>{
                console.log('----',data)
            },cbError:(msg,code)=>{

            }
        })
    }

    items = (items)=>{

       return( _.map(_.chunk(items,4),(value ,index)=>{

            return <View key={index} style={{flexDirection:'row',marginTop:c.screenPadding}}>
                {_.map(value,(v,i)=>{
                    return (
                        <View key={i} style={{flex:1,backgroundColor:'gray',marginTop:c.screenPadding,alignItems:'center'}}>

                            <Image style={{width:c.fixPx(100),height:c.fixPx(100)}} source={{url:"http://www.ppke.cn" + v.image}}/>
                            <Text style={{textAlign:'center',fontSize:c.fixPx(18)}}>{v.name}</Text>
                        </View>
                        )
                })}
            </View>
        })
       )
    }

    render() {
        console.log('====companyType',this.props.homeDetail.companyType)
        const {actions} = this.props;
        return (
            <View style={styles.container}>

                {this.props.homeDetail.carouselList ?
                    <View style={{width: c.width, height: c.fixPx(320)}}>
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
                            {this.props.homeDetail.carouselList && this.props.homeDetail.carouselList.map((item, i) => {

                                return (
                                    <View style={{flex: 1}} key={i}>
                                        <Image resizeMode='center' style={{width: c.width, height: c.fixPx(280)}}
                                               source={{url: item.image_url}}/>
                                        <Text style={{textAlign: 'center'}}>这是在redux中取出的第{i + 1}张图片</Text>
                                    </View>
                                )
                            })}
                        </Swiper></View>
                    : null}
                {
                    this.props.homeDetail.companyType === "undefined"?null:this.items(this.props.homeDetail.companyType)
                }

                <Text style={styles.welcome} onPress={() => this.clickAction()}>
                    点击进入详情界面
                </Text>
            </View>
        );
    }

    clickAction = () => {
        console.log('jjj');
        this.changeNavigator('route.HomeDetailPage', {title: 'titlejj'}, '二级title');
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
        backgroundColor: 'red'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
