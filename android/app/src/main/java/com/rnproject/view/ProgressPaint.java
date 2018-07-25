package com.rnproject.view;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.View;

/**
 * Created by vpjacob on 2018/7/25.
 */

public class ProgressPaint extends View {

    private int progress = 0;
    private Paint mPaint;

    private int widthInDp=100;
    private int strokeWidth = 8;
    private int padding=8;
    private RectF mRectf  ;

    /**
     * 最大进度
     */
    private static final int maxProgress = 100;

    public ProgressPaint(Context context) {
        super(context);
        init(context);
    }

    public ProgressPaint(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    public ProgressPaint(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    private void init(Context context){
        mPaint = new Paint();
        // 设置画笔为抗锯齿
        mPaint.setAntiAlias(true);
        // 设置颜色为红色
        mPaint.setColor(Color.parseColor("#1E90FF"));
        mPaint.setStrokeCap(Paint.Cap.ROUND);
        mPaint.setStyle(Paint.Style.STROKE);
        mPaint.setStrokeWidth(dip2px(context,strokeWidth));
        int padInPix = dip2px(context,padding);
        mRectf = new  RectF(padInPix,padInPix,dip2px(context,widthInDp)-padInPix,dip2px(context,widthInDp)-padInPix);

    }


    public static int dip2px(Context context, float dpValue) {
        final float scale = context.getResources().getDisplayMetrics().density;
        return (int) (dpValue * scale + 0.5f);
    }

    public void setProgress(int progress){
        this.progress = progress%maxProgress;
        postInvalidate();
    }


    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        float precent = 1.0f*progress/maxProgress;//当前完成百分比
        canvas.drawArc(mRectf, 360*precent, 100, false, mPaint);
        canvas.drawArc(mRectf, 180+360*precent, 100, false, mPaint);

    }

}
