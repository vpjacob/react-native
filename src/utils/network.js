//TODO 判断是否连接,网络状态

import {store} from '../../App';
import _ from 'lodash';
import axios from 'axios';
import {getNetStatus} from './networkTools';
import {asyncLog} from './common';

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
    console.log("dd")

    return reqParams;
}

export const makeAsyncAction = (params) => {
    const {url, success, error} = params;
    return (reqParams, reqOpts) => (dispatch) => {
        const args = reqOpts && reqOpts.args ? reqOpts : {};
        const timeout = reqOpts && reqOpts.timeout ? reqOpts.timeout : 10000;
        const cancelToken = reqOpts && reqOpts.cancelToken ? reqOpts.cancelToken : null;
        const reqUrl = getUrl() + url;
        asyncLog('Send HTTP request:', reqUrl, reqParams);
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
            asyncLog('JSON parsed response:', json);
            const { code, msg } = json
            if (code === 0) {
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
        }).catch( ex => {
            asyncLog('ERROR in HTTP request:', url,ex);
            const {message} = ex;
            const code = '9999';
            const msg = '网络异常';
            if (error) {
                dispatch({code,msg,type:error,args,message});
            }
            if (reqOpts && reqOpts.cbError){
                reqOpts.cbError({code,msg,message,args});
            }
        })


    }
}


export const makeAsyncActionGet = (params) => {
    const {url, success, error} = params;
    return (reqParams, reqOpts) => (dispatch) => {
        const args = reqOpts && reqOpts.args ? reqOpts : {};
        const timeout = reqOpts && reqOpts.timeout ? reqOpts.timeout : 10000;
        const cancelToken = reqOpts && reqOpts.cancelToken ? reqOpts.cancelToken : null;
        const reqUrl = getUrl() + url;
        asyncLog('Send HTTP request:', reqUrl, reqParams);


        axios.get(reqUrl,{
            params: reqParams})
            .then(resp => {
            return resp.data
        }).then(json => {
            asyncLog('JSON parsed response:', json);
            const { code, msg } = json
            // let js = JSON.parse(json.formDataset.companyType)
            // console.log('====',js)
            if (json.execStatus === "true") {
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
        }).catch( ex => {
            asyncLog('ERROR in HTTP request:', url,ex);
            const {message} = ex;
            const code = '9999';
            const msg = '网络异常';
            if (error) {
                dispatch({code,msg,type:error,args,message});
            }
            if (reqOpts && reqOpts.cbError){
                reqOpts.cbError({code,msg,message,args});
            }
        })


    }
}