import {makeAsyncAction} from '../weight/network';
// import * as actionTypes from '../actions/actionTypes';

export const testAction = makeAsyncAction({
    url:'http://ip.taobao.com/service/getIpInfo.php?ip=63.223.108.42'
})
