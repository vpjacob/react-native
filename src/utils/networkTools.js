import React,{NetInfo} from 'react-native';

const NOT_NETWORK = '网络不可用，请稍后再试';
const TAG_NETWORK_CHANGE = 'NetworkChange';

const checkNetworkState = (callback) => {
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
}

const removeEventListener = (tag,handler) => {
    NetInfo.isConnected.removeEventListener(tag,handler);
}

const addEventListener = (tag,handler) => {
    NetInfo.isConnected.addEventListener(tag,handler);
}

export function getNetStatus(){
    return NetInfo.getConnectionInfo().then((netinfo => {
        return netinfo.toString().toUpperCase();
    }))
} 

export default{
    checkNetworkState,
    addEventListener,
    removeEventListener,
    NOT_NETWORK,
    TAG_NETWORK_CHANGE
}