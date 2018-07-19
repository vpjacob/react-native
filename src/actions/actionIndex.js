import {makeAsyncAction} from '../utils/network';
import * as actionTypes from '../constants/actionType';

export const testAction = makeAsyncAction({
    url:'http://ip.taobao.com/service/getIpInfo.php?ip=63.223.108.42',success:actionTypes.HAHA,error:actionTypes.ERROR
})
