package com.rnproject.view;

import android.animation.ValueAnimator;
import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;

import com.rnproject.R;

/**
 * Created by vpjacob on 2018/7/25.
 */

public class LoadingView extends Dialog {

    Context mContext ;
    boolean isCancel ;
    private ValueAnimator mRotateAnimation;
    private ProgressPaint pbLoading;
    private ValueAnimator.AnimatorUpdateListener mListener= new ValueAnimator.AnimatorUpdateListener() {
        @Override
        public void onAnimationUpdate(ValueAnimator animation) {
            pbLoading.setProgress((int)animation.getAnimatedValue());
        }
    };


    public LoadingView(Context context,boolean canCancel) {
        super(context,R.style.SplashScreen_Fullscreen);
        mContext = context;
        isCancel = canCancel ;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.view_loading);
        pbLoading = (ProgressPaint) findViewById(R.id.pb_loading);
        mRotateAnimation = ValueAnimator.ofInt(0, 100);
        mRotateAnimation.setDuration(1000);
        mRotateAnimation.setInterpolator(new LinearInterpolator());
        mRotateAnimation.setRepeatCount(Animation.INFINITE);
        mRotateAnimation.setRepeatMode(ValueAnimator.RESTART);
        setCanceledOnTouchOutside(isCancel);
    }

    @Override
    protected void onStart() {
        super.onStart();
        mRotateAnimation.addUpdateListener(mListener);
        mRotateAnimation.start();
    }

    @Override
    public void show() {
        super.show();
    }

    @Override
    protected void onStop() {
        super.onStop();
        mRotateAnimation.cancel();
        mRotateAnimation.removeAllUpdateListeners();
    }

    @Override
    public void dismiss() {
        super.dismiss();
    }

}
