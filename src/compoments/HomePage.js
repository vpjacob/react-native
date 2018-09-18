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

export default class HomePage extends BasePage {
    render() {
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
                                        <Text style={{textAlign: 'center'}}>这是第+{i + 1}+张图片</Text>
                                    </View>
                                )
                            })}
                        </Swiper></View>
                    : null}

                <Text style={styles.welcome} onPress={() => this.clickAction()}>
                    Welcome to HomePage!
                </Text>
                <Text style={styles.instructions}>
                    当点击HomeDetail后，redux有数据，会显示轮播图
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
