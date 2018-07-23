//
//  RNTools.h
//  untitled
//
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface RNTools : NSObject

/**
 初始化RNTools

 @return RNTools
 */
+ (instancetype)shared;

#pragma mark - 原生Toast
- (void)showNativeToast:(NSString *)string;

#pragma mark - 原生Loading
- (void)showNativeLoadingCanUserControl:(BOOL)canControl;
- (void)hiddenNativeLoading;


#pragma mark - IDFA/IDFV
+ (NSString *)getIDFA;

#pragma mark - ToolsMethond
+ (UIViewController *)getCurrentViewController;

#pragma mark - 改变颜色
- (void)changeColor;

#pragma mark - 网络状态
+ (NSString *)netWorkStates;
+ (NSString *)getIPAddress:(BOOL)preferIPv4;
@end
