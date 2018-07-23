//
//  RNBridgeTools.m
//  RNProject
//
//  Created by vpjacob on 2018/7/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//
#define dispatch_main_sync_safe(block)\
if ([NSThread isMainThread]) {\
block();\
} else {\
dispatch_sync(dispatch_get_main_queue(), block);\
}

#import "RNBridgeTools.h"
#import "AppDelegate.h"
#import "RNTools.h"


@implementation RNBridgeTools
RCT_EXPORT_MODULE();

#pragma mark - 原生Loading
RCT_EXPORT_METHOD(displayNativeLoading:(BOOL)canUserControl)
{
  [[RNTools shared] showNativeLoadingCanUserControl:canUserControl];
}

RCT_EXPORT_METHOD(hiddenNativeLoading)
{
  [[RNTools shared] hiddenNativeLoading];
}


#pragma mark - 原生Toast
RCT_EXPORT_METHOD(displayNativeToast:(NSString *)string)
{
  [[RNTools shared] showNativeToast:string];
}

#pragma mark - 判断是否安装某个应用
RCT_EXPORT_METHOD(isAppInstalled:(NSString *)pkgName callBack:(RCTResponseSenderBlock)callback)
{
  dispatch_main_sync_safe(^{
    if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:pkgName]]) {
      callback(@[[NSNull null],@(true)]);
    }else{
      callback(@[[NSNull null],@(false)]);
    }
  })
}
#pragma mark - 判断网络状态
RCT_EXPORT_METHOD(getNativeNetStates:(RCTResponseSenderBlock)callback){
  int status = [[RNTools netWorkStates] intValue];
  callback(@[[NSNull null],@(status)]);
}
#pragma mark - IDFA \ IDFV
RCT_EXPORT_METHOD(getIDFA:(RCTResponseSenderBlock)callback)
{
  NSString *IDFAString = [RNTools getIDFA];
  callback(@[[NSNull null],IDFAString]);
}
#pragma mark 获取IP
RCT_EXPORT_METHOD(getIPAddress:(RCTResponseSenderBlock)callback)
{
  NSString *ipAdress = [RNTools getIPAddress:YES]; //ipv4
  callback(@[[NSNull null],ipAdress]);
}
#pragma mark 获取本地参数
RCT_EXPORT_METHOD(getChannelExtraBooleanInfo:(NSString *)infoKey :(RCTResponseSenderBlock)callback)
{
  BOOL infoValue = true;
  if ([infoKey isEqualToString:@"hallState"]) {
    infoValue = false;
  }
  callback(@[@(infoValue),[NSNull null]]);
}
#pragma mark 获取电池栏高度
RCT_EXPORT_METHOD(getNativeStatusBarHeight:(RCTResponseSenderBlock)callback)
{
  dispatch_main_sync_safe(^{
    CGRect statusRect = [[UIApplication sharedApplication] statusBarFrame];
    CGFloat statusBarHeight = statusRect.size.height;
    callback(@[@(statusBarHeight),[NSNull null]]);
  })
}

@end
