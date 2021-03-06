import React from 'react';
import {
  StyleSheet,
  InteractionManager,
  NetInfo,
  View,
  Image,
  Platform,
  Alert,
  PermissionsAndroid
} from 'react-native';
// import {AppRouteLists} from "../screen/screenindex";
import NativeReactBridge from '../native/NativeReactBridge';
import _ from 'lodash';



// 交互完成后
export const asyncLog = (...args) => {
    if(!__DEV__){return};
    InteractionManager.runAfterInteractions(() => {
        console.log(...args);
    })
}

export const showMsg = (text, position = -20) => {
    if (_.isEmpty(text)) {
        return
    }
    NativeReactBridge.displayNativeToast(text);
}

export const showLoading = () => {
    NativeReactBridge.displayNativeLoading(true)
}

export const hideLoading = () => {
    NativeReactBridge.hiddenNativeLoading();
}

