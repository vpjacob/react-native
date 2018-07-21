package com.rnproject.module;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.security.PublicKey;

/**
 * Created by vpjacob on 2018/7/21.
 */

public class NativeReactBridgeModule extends ReactContextBaseJavaModule {

    public static final String MODULE_NAME = "NativeReactBridgeModule";

    private ReactContext mContext ;

    private Toast toast;

    public NativeReactBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext ;
    }


    @Override
    public String getName() {
        return MODULE_NAME;
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

}
