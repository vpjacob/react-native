import React, { Component } from "react";
import {View, StyleSheet, Text,InteractionManager,StatusBar,Keyboard} from "react-native";
// TODO 加入路由判断
import {isRouteExit, showMsg} from "../utils/common";

export default class BasePage extends Component{
    constructor(){
        super();
        this.state = {

        };
    }

    /**路由跳转*/
    changeNavigator = (screenKey, screenProps,screenActions) => {
        const {navigate} = this.props.navigation;
        if (isRouteExit(screenKey)) {
            navigate(screenKey, screenProps, screenActions);
            // Keyboard.dismiss();
        }else{
            showMsg('路由器未注册或不存在')
        }
    }


}