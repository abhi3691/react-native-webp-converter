import { useState } from 'react';
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-webp-converter' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const WebpConverterModule = isTurboModuleEnabled
  ? require('../../NativeWebpConverter').default
  : NativeModules.WebpConverter;

const WebpConverter = WebpConverterModule
  ? WebpConverterModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const useConvertTOWebp = () => {
  const [convertedImage, setConvertedImage] = useState<string>('');
  const convertFunction = async (imageUrl: string) => {
    if (imageUrl) {
      try {
        WebpConverter.convertToWebP(imageUrl)
          .then((webpBase64: string) => {
            setConvertedImage(webpBase64);
          })
          .catch((error: string) => {
            console.error('Error converting to WebP:', error);
          });
      } catch (error) {
        console.error('Error converting PNG to base64:', error);
      }
    }
  };
  return { convertFunction, convertedImage };
};
