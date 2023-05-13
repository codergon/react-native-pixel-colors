import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-pixel-colors' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const PixelColors = NativeModules.PixelColors
  ? NativeModules.PixelColors
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

type Callback = (width: number, height: number) => void;

export function setImage(imageUri: string, callback?: Callback) {
  try {
    PixelColors.setImage(imageUri, callback ?? (() => {}));
  } catch (error) {
    throw new Error('Error setting image');
  }
}

export function getImageSize(callback?: Callback) {
  PixelColors.getImageSize(callback ?? (() => {}));
}

export async function getPixelColor(x: number, y?: number) {
  const result = await PixelColors.getPixelColor(
    x,
    isNaN(y as number) ? x : y
  ).then((color: string) => {
    return color;
  });

  return result ?? '';
}
