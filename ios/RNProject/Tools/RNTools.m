//
//  RNTools.m
//  untitled
//
//  Copyright © 2018年 Facebook. All rights reserved.
//

//屏幕高度
#define W_HEIGHT [UIScreen mainScreen].bounds.size.height
//屏幕宽度
#define W_WIDTH  [UIScreen mainScreen].bounds.size.width
//常用高度
#define StatusBarHeight 20
#define NavigationHeight 44
#define TabBarHeight 49

#define IOS_CELLULAR    @"pdp_ip0"
#define IOS_WIFI        @"en0"
//#define IOS_VPN       @"utun0"
#define IP_ADDR_IPv4    @"ipv4"
#define IP_ADDR_IPv6    @"ipv6"

/**
 添加同步任务到主线程
 */
#define dispatch_main_sync_safe(block)\
if ([NSThread isMainThread]) {\
block();\
} else {\
dispatch_sync(dispatch_get_main_queue(), block);\
}

#import "RNTools.h"
#import "AppDelegate.h"
#import "LoadingView.h"
#import "Reachability.h"
#import <AdSupport/AdSupport.h>
#import <ifaddrs.h>
#import <arpa/inet.h>
#import <net/if.h>

@interface RNTools()
@property (nonatomic, strong)UIActivityIndicatorView *loadingView;
@end

@implementation RNTools

+ (instancetype)shared
{
  __strong static RNTools * manager = nil;
  if (manager) {
    return manager;
  }
  
  static dispatch_once_t d;
  dispatch_once(&d, ^{
    manager = [RNTools new];
  });
  return manager;
}

#pragma mark - 原生Toast
- (void)showNativeToast:(NSString *)string
{
  dispatch_main_sync_safe(^{
    UIFont *f = [UIFont systemFontOfSize:15];
    UIView *toast = [[UIView alloc] initWithFrame:CGRectZero];
    [toast setClipsToBounds:YES];
    [toast.layer setCornerRadius:8];
    [toast setBackgroundColor:[UIColor colorWithWhite:0.0 alpha:0.8]];
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectZero];
    [label setTextColor:[UIColor whiteColor]];
    [label setFont:f];
    
    [label setBackgroundColor:[UIColor clearColor]];
    
    CGSize detailSize = [string sizeWithAttributes:@{NSFontAttributeName:f}];
    if (detailSize.width <= (W_WIDTH/3*2)) {
      [label setText:string];
      [label sizeToFit];
    } else {
      [label setNumberOfLines:0];
      [label setFrame:CGRectMake(0, 0, W_WIDTH/3*2, 0)];
      NSMutableParagraphStyle  *paragraphStyle = [[NSMutableParagraphStyle alloc] init];
      [paragraphStyle  setLineSpacing:10];
      NSMutableAttributedString *attStr = [[NSMutableAttributedString alloc] initWithString:string attributes:@{NSParagraphStyleAttributeName:paragraphStyle}];
      [label setAttributedText:attStr];
      [label sizeToFit];
      [label setTextAlignment:NSTextAlignmentCenter];
    }
    
    [toast setFrame:CGRectMake(0, 0, label.frame.size.width + 20, label.frame.size.height + 20)];
    [toast addSubview:label];
    [label setCenter:CGPointMake(toast.frame.size.width/2.0, toast.frame.size.height/2.0)];
    [toast setCenter:CGPointMake(W_WIDTH/2.0, W_HEIGHT - toast.frame.size.height/2.0 - 30.0)];
    
    UIWindow *window = [RNTools mainWindow];
    [window addSubview:toast];
    [window bringSubviewToFront:toast];
    
    [UIView animateWithDuration:0.4 delay:1.0 options:UIViewAnimationOptionTransitionNone animations:^{
      [toast setAlpha:0.3];
    } completion:^(BOOL finished) {
      [toast removeFromSuperview];
    }];
  })
}


#pragma mark - IDFA/IDFV
+ (NSString *)getIDFA{
  NSString* IDFAStr = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
  return IDFAStr;
}


#pragma mark - 原生Loading
- (void)showNativeLoadingCanUserControl:(BOOL)canControl{
  dispatch_main_sync_safe(^{
    [[LoadingView shared] showLoadingCanController:canControl];
    [[LoadingView shared] startAnimation];
  })
}

- (void)hiddenNativeLoading{
  dispatch_main_sync_safe(^{
    [[LoadingView shared] hidenLoading];
  })
}

- (void)changeColor{
  UIView *view = [UIView new];
  view.backgroundColor = [UIColor grayColor];
  
}

#pragma mark - 网络状态

+ (NSString *)getIPAddress:(BOOL)preferIPv4
{
  NSArray *searchArray = preferIPv4 ?
  @[ /*IOS_VPN @"/" IP_ADDR_IPv4, IOS_VPN @"/" IP_ADDR_IPv6,*/ IOS_WIFI @"/" IP_ADDR_IPv4, IOS_WIFI @"/" IP_ADDR_IPv6, IOS_CELLULAR @"/" IP_ADDR_IPv4, IOS_CELLULAR @"/" IP_ADDR_IPv6 ] :
  @[ /*IOS_VPN @"/" IP_ADDR_IPv6, IOS_VPN @"/" IP_ADDR_IPv4,*/ IOS_WIFI @"/" IP_ADDR_IPv6, IOS_WIFI @"/" IP_ADDR_IPv4, IOS_CELLULAR @"/" IP_ADDR_IPv6, IOS_CELLULAR @"/" IP_ADDR_IPv4 ] ;
  
  NSDictionary *addresses = [self getIPAddresses];
  //  NSLog(@"addresses: %@", addresses);
  
  __block NSString *address;
  [searchArray enumerateObjectsUsingBlock:^(NSString *key, NSUInteger idx, BOOL *stop)
   {
     address = addresses[key];
     if(address) *stop = YES;
   } ];
  return address ? address : @"0.0.0.0";
}



+ (NSDictionary *)getIPAddresses
{
  NSMutableDictionary *addresses = [NSMutableDictionary dictionaryWithCapacity:8];
  
  // retrieve the current interfaces - returns 0 on success
  struct ifaddrs *interfaces;
  if(!getifaddrs(&interfaces)) {
    // Loop through linked list of interfaces
    struct ifaddrs *interface;
    for(interface=interfaces; interface; interface=interface->ifa_next) {
      if(!(interface->ifa_flags & IFF_UP) /* || (interface->ifa_flags & IFF_LOOPBACK) */ ) {
        continue; // deeply nested code harder to read
      }
      const struct sockaddr_in *addr = (const struct sockaddr_in*)interface->ifa_addr;
      char addrBuf[ MAX(INET_ADDRSTRLEN, INET6_ADDRSTRLEN) ];
      if(addr && (addr->sin_family==AF_INET || addr->sin_family==AF_INET6)) {
        NSString *name = [NSString stringWithUTF8String:interface->ifa_name];
        NSString *type;
        if(addr->sin_family == AF_INET) {
          if(inet_ntop(AF_INET, &addr->sin_addr, addrBuf, INET_ADDRSTRLEN)) {
            type = IP_ADDR_IPv4;
          }
        } else {
          const struct sockaddr_in6 *addr6 = (const struct sockaddr_in6*)interface->ifa_addr;
          if(inet_ntop(AF_INET6, &addr6->sin6_addr, addrBuf, INET6_ADDRSTRLEN)) {
            type = IP_ADDR_IPv6;
          }
        }
        if(type) {
          NSString *key = [NSString stringWithFormat:@"%@/%@", name, type];
          addresses[key] = [NSString stringWithUTF8String:addrBuf];
        }
      }
    }
    // Free memory
    freeifaddrs(interfaces);
  }
  return [addresses count] ? addresses : nil;
}

+ (NSString *)netWorkStates{
  int type = 0;
  Reachability *internetReachability = [Reachability reachabilityForInternetConnection];
  NetworkStatus status = [internetReachability currentReachabilityStatus];
  switch (status) {
    case NotReachable:
      type = 0;
      break;
    case ReachableViaWiFi:
      type = 6;
      break;
    case ReachableViaWWAN:
      type = 7;
      break;
    case kReachableVia2G:
      type = 2;
      break;
    case kReachableVia3G:
      type = 3;
      break;
    case kReachableVia4G:
      type = 4;
      break;
    default:
      break;
  }

  // callback返回参数(num)说明：0 - 无网络; 1 - 有网络; 2 - 2G; 3 - 3G; 4 - 4G; 5 - LTE; 6 - WIFI; 7 - WWAN
  return [NSString stringWithFormat:@"%d",type];
}

#pragma mark - 内部Tools
+ (UIWindow *)mainWindow
{
  NSArray *windows = [UIApplication sharedApplication].windows;
  for(UIWindow *window in [windows reverseObjectEnumerator]) {
    if ([window isKindOfClass:[UIWindow class]] &&
        CGRectEqualToRect(window.bounds, [UIScreen mainScreen].bounds))
      return window;
  }
  return [UIApplication sharedApplication].keyWindow;
}

+ (UIViewController *)getCurrentViewController{
  return [UIApplication sharedApplication].keyWindow.rootViewController;
}

#pragma mark - GETER&SETER
- (UIActivityIndicatorView *)loadingView{
  if (!_loadingView) {
    _loadingView = [[UIActivityIndicatorView alloc] initWithFrame:CGRectMake(0, 0, 50, 50)];
    _loadingView.backgroundColor = [UIColor grayColor];
    _loadingView.layer.cornerRadius = 10;
    _loadingView.layer.masksToBounds = YES;
  }
  return _loadingView;
}

@end
