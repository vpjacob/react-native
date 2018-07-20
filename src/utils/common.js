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

// 交互完成后
export const asyncLog = (...args) => {
    if(!__DEV__){return};
    InteractionManager.runAfterInteractions(() => {
        console.log(...args);
    })
}