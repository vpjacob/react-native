//TODO 判断是否连接,网络状态

import {store} from '../../App';
import _ from 'lodash';
import axios from 'axios';

export const createSourceToken = () => {
    const CancelToken = axios.CancelToken;
    return CancelToken.source();
}

export const getUrl = () => {
    return store.getState().urlInit.baseUrl;
}

export const buildPublicParams = ({status, reqParams }) => {
    // let reqJson = _.merge(reqParams, getPublicParams(),{net : status})
    // const userId = store.getState().account.userId
    // if (userId) {
    //     reqJson = _.merge(reqJson,{uid:userId})
    // }
    return reqParams;
}

export const makeAsyncAction = (params) => {
    const {url, success, error} = params;
    return (reqParams, reqOpts) => (dispatch) => {
        const args = reqOpts && reqOpts.args ? reqOpts : {};
        const timeout = reqOpts && reqOpts.timeout ? reqOpts.timeout : 10000;
        const cancelToken = reqOpts && reqOpts.cancelToken ? reqOpts.cancelToken : null;
        const reqUrl = getUrl() + url;
        axios({
            url:reqUrl,
            method:'post',
            responseType:'json',
            data:buildPublicParams({reqParams}),
            timeout:timeout,
            cancelToken:cancelToken,
            maxRedirects:10,
        }).then(resp => {
            return resp.data
        }).then(json => {
            const { code, msg } = json
            if (code === "0000") {
                if (success) {

                    dispatch({ ...json, type: success, args, params, reqParams, reqOpts })
                }

                if (reqOpts && reqOpts.cbSuccess) {
                    reqOpts.cbSuccess({ ...json, args })
                }
            } else {
                if (error) {
                    dispatch({ ...json, type: error, args, params, reqParams, reqOpts })
                }

                if (reqOpts && reqOpts.cbError) {
                    reqOpts.cbError({ ...json, args })
                }
            }
        })


    }
}