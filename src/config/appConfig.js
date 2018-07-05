import {  Platform, NetInfo } from 'react-native';
import DeviceInfo from 'react-native-device-info';


export const APP_VERSION = DeviceInfo.getVersion();

/**
 * 设备信息
 */
export const DEVICE_INFO = DeviceInfo.getUserAgent();

/**
 * 苹果型号
 */
export const DEVICEID = DeviceInfo.getModel();

/**
 * 操作系统
 */
export const OS = Platform.OS;

/**
 * UID
 */

export let DEVICE_UID = Platform.OS === 'ios' ? DeviceInfo.getUniqueID() : DeviceInfo.getInstanceID();

/**
 * App状态栏高度
 */
export let appStatusBarHeight = 0;

/**获取手机状态栏高度*/
// TODO
// export function initAppNativeStatusBarHeight(){
//     NativeReactBridge.getNativeStatusBarHeight((height) => {
//         appStatusBarHeight = height ;
//     })
// }