//
//  LoadingView.m
//  testDemo
//
//  Copyright © 2018年 Facebook. All rights reserved.
//

//屏幕高度
#define KHEIGHT [UIScreen mainScreen].bounds.size.height
//屏幕宽度
#define KWIDTH  [UIScreen mainScreen].bounds.size.width
//常用高度
#define StatusBarHeight 20
#define NavigationHeight 44
#define TabBarHeight 49


#import "ArcToCircleLayer.h"
#import "LoadingView.h"
#import "RNTools.h"

static CGFloat const kRadius = 40;
static CGFloat const kLineWidth = 6;

@interface LoadingView()
@property (nonatomic,weak)UIButton *btn;//背景
@property (nonatomic) ArcToCircleLayer *arcToCircleLayer;
@property (nonatomic, strong)CABasicAnimation* rotationAnimation;
@end

@implementation LoadingView


+ (LoadingView *)shared
{
  
  __strong static LoadingView * view = nil;
  
  //dispatch_once只执行一次
  static dispatch_once_t d;
  
  dispatch_once(&d, ^{
    //  创建背景 添加隐藏loading按钮
    view = [[LoadingView alloc] initWithFrame:CGRectMake(0, 0, KWIDTH, KHEIGHT)];
    [view setBackgroundColor:[UIColor colorWithWhite:0 alpha:0.5]];
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn setFrame:CGRectMake(0, 0, view.frame.size.width, view.frame.size.height)];
    [view addSubview:btn];
    [btn addTarget:view action:@selector(hidenLoading) forControlEvents:UIControlEventTouchUpInside];
    
  });
  
  return view;
}

- (void)startAnimation{
  [self.layer addSublayer:self.arcToCircleLayer];
  [self.arcToCircleLayer addAnimation:self.rotationAnimation forKey:@"rotationAnimation"];
  
}

- (void)showLoadingCanController:(BOOL)canController{
  [[RNTools getCurrentViewController].view addSubview:self];
  canController ? [self.btn setUserInteractionEnabled:YES] : [self.btn setUserInteractionEnabled:NO];
}

- (void)hidenLoading{
  [self.arcToCircleLayer removeAllAnimations];
  [self.arcToCircleLayer removeFromSuperlayer];
  [self removeFromSuperview];
}

- (CABasicAnimation *)rotationAnimation{
  if (!_rotationAnimation) {
    _rotationAnimation = [CABasicAnimation animationWithKeyPath:@"transform.rotation.z"];
    _rotationAnimation.toValue = [NSNumber numberWithFloat: M_PI * 2.0 ];
    _rotationAnimation.duration = 1;
    _rotationAnimation.repeatCount = HUGE_VALF;
  }
  return _rotationAnimation;
}

- (ArcToCircleLayer *)arcToCircleLayer{
  if (!_arcToCircleLayer) {
    _arcToCircleLayer = [ArcToCircleLayer layer];
    _arcToCircleLayer.contentsScale = [UIScreen mainScreen].scale;
    _arcToCircleLayer.bounds = CGRectMake(0, 0, kRadius * 2 + kLineWidth, kRadius * 2 + kLineWidth);
    _arcToCircleLayer.position = CGPointMake(CGRectGetMidX(self.bounds), CGRectGetMidY(self.bounds));
    // animation
    _arcToCircleLayer.progress = 1; // end status
  }
  return _arcToCircleLayer;
}


@end
