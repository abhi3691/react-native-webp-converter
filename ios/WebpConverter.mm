#import "WebpConverter.h"
#import <React/RCTLog.h>
#import <SDWebImage/SDWebImage.h>
#import <SDWebImageWebPCoder/SDWebImageWebPCoder.h>
#import "NSData+Base64.h" // Add this import for base64 encoding
@implementation WebpConverter
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios

RCT_EXPORT_METHOD(convertToWebP:(NSString *)imageUrl resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    // Register the WebP coder
    [SDImageCodersManager.sharedManager addCoder:SDImageWebPCoder.sharedCoder];

    // Create a URL from the provided string
    NSURL *url = [NSURL URLWithString:imageUrl];

    // Download the image data
    NSData *imageData = [NSData dataWithContentsOfURL:url];
    
    if (imageData) {
        // Convert the image data to base64
        NSString *base64String = [imageData base64EncodedStringWithSeparateLines:NO]; // Use appropriate options

        RCTLogInfo(@"Image Base64: %@", base64String);

        // If base64 conversion is successful, resolve the promise
      resolve([NSString stringWithFormat:@"data:image/webp;base64,%@", base64String]);
    } else {
        // Log an error if image data is nil
        RCTLogError(@"Error loading image data");
        reject(@"IMAGE_LOAD_ERROR", @"Error loading image data", nil);
    }
}

// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeWebpConverterSpecJSI>(params);
}
#endif

@end
