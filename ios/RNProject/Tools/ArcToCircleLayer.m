//
//  ArcToCircleLayer.m
//  testDemo
//
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "ArcToCircleLayer.h"
static CGFloat const kLineWidth = 5;
@implementation ArcToCircleLayer
@dynamic progress;
+ (BOOL)needsDisplayForKey:(NSString *)key {
  if ([key isEqualToString:@"progress"]) {
    return YES;
  }
  return [super needsDisplayForKey:key];
}

- (void)drawInContext:(CGContextRef)ctx {
  [self creatLayerWith:ctx originStart:0 originEnd:M_PI_2];
  [self creatLayerWith:ctx originStart:M_PI_2 * 2 originEnd:M_PI_2 * 3];
}

- (void)creatLayerWith:(CGContextRef)ctx originStart:(CGFloat)originStart originEnd:(CGFloat)originEnd{
  UIBezierPath *path = [UIBezierPath bezierPath];
  CGFloat radius = MIN(CGRectGetWidth(self.bounds), CGRectGetHeight(self.bounds)) / 2 - kLineWidth / 2 - 10;
  CGPoint center = CGPointMake(CGRectGetMidX(self.bounds), CGRectGetMidY(self.bounds));
  [path addArcWithCenter:center radius:radius startAngle: originStart endAngle:originEnd clockwise:YES];
  CGContextAddPath(ctx, path.CGPath);
  CGContextSetLineWidth(ctx, kLineWidth);
  CGContextSetStrokeColorWithColor(ctx, [UIColor colorWithRed:82/255.0 green:170/255.0 blue:230/255.0 alpha:1.0].CGColor);
  CGContextStrokePath(ctx);
}

@end
