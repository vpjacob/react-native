package com.rnproject.module;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.rnproject.view.LoadingView;

import java.security.PublicKey;

/**
 * Created by vpjacob on 2018/7/21.
 */

public class NativeReactBridgeModule extends ReactContextBaseJavaModule {

    public static final String MODULE_NAME = "NativeReactBridgeModule";
    private Intent downloadIntent;
    private ReactContext mContext ;
    private LoadingView mLoadingView;
    private Toast toast;

    public NativeReactBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext ;
    }


    @Override
    public String getName() {
        return MODULE_NAME;
    }


    /**显示loading*/
    @ReactMethod
    public void displayNativeLoading(boolean canCancel){
        loadingView(getCurrentActivity(),true,canCancel);
    }
    /*展示loading*/
    public void loadingView(Activity mContext,boolean isShow,boolean canCancel){
        if (mLoadingView == null) {
            mLoadingView = new LoadingView(mContext,canCancel);
        }
        mLoadingView.setCanceledOnTouchOutside(canCancel);
        Log.d("loading",""+isShow);
        if (isShow) {
            if(mContext == null || mContext.isFinishing()){
                return;
            }
            mLoadingView.show();
        } else {
            if (mLoadingView != null && mLoadingView.isShowing()) {
                mLoadingView.dismiss();
            }
        }
    }

    /**隐藏loading*/
    @ReactMethod
    public void hiddenNativeLoading(){
        loadingView(getCurrentActivity(),false,true);
    }



    /**显示吐司*/
    @ReactMethod
    public void displayNativeToast(String msg){
        showToast(mContext,msg);
    }
    public void showToast(Context mContext,String msg){
        if (toast == null){
            toast = Toast.makeText(mContext,msg,Toast.LENGTH_SHORT);
        }else {
            toast.cancel();
            toast = Toast.makeText(mContext,msg,Toast.LENGTH_SHORT);
        }
        toast.show();
    }


    @ReactMethod
    public void closeApp(){
        System.exit(0);
    }
    @ReactMethod
    public void isAppInstalled(String pkgName,Callback callback){
        PackageInfo packageInfo;
        try {
            packageInfo = mContext.getPackageManager().getPackageInfo(pkgName, 0);
        } catch (PackageManager.NameNotFoundException e) {
            packageInfo = null;
        }
        if (packageInfo != null) {
            callback.invoke(null, true);
        } else {
            callback.invoke(null, false);
        }
    }

    /** 移动端当前网络状态 */
//    @ReactMethod
//    public void getNativeNetStates(Callback callback) {
//        int type = commonUtils.getInterState(mContext);
//        callback.invoke(null, type);
//    }


    /**
     * 下载apk文件
     */
//    @ReactMethod
//    public void downloadApk(String upgradeUrl, String versionName) {
//        if (downloadIntent == null) {
//            downloadIntent = new Intent(mContext, DownloadService.class);
//        }
//        String channel = WalleChannelReader.get(mContext, "channel");
//        //下载地址
//        downloadIntent.putExtra("url", upgradeUrl);
//        downloadIntent.putExtra("channel", channel);
//        if(!TextUtils.isEmpty(versionName)){
//            versionName = versionName.replace(".","");
//            downloadIntent.putExtra("versionName", versionName);
//        }else{
//            downloadIntent.putExtra("versionName", "");
//        }
//        mContext.startService(downloadIntent);
//    }


//    /**
//     * 获取 IP 地址
//     */
//    @ReactMethod
//    public void getIPAddress(Callback callback) {
//        String ip = commonUtils.getIPAddress(mContext);
//        callback.invoke(null,ip);
//    }
//
//    /**
//     * 获取渠道
//     */
//    @ReactMethod
//    public void getChannel(Callback success, Callback error) {
//        String channel = WalleChannelReader.get(mContext, "channel");
//        if (!TextUtils.isEmpty(channel)) {
//            success.invoke(channel);
//        } else {
//            success.invoke("default");
//        }
//    }
//
//    /**
//     * 渠道App本地配置参数
//     */
//    @ReactMethod
//    public void getChannelExtraBooleanInfo(String extraKey, Callback success) {
//        success.invoke(commonUtils.getChannelInfo(mContext,extraKey));
//    }


}
