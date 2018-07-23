//
//  LoadingView.h
//  testDemo
//
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface LoadingView : UIView
+ (LoadingView *)shared;

- (void)showLoadingCanController:(BOOL)canController;

- (void)hidenLoading;
- (void)startAnimation;
@end
