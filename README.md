# React Native Pixel Colors

Get pixel color of an image at specified coordinates.

**NOTE:** This is a native module for iOS only. Android support is coming soon.

## Installation

```sh
npm install react-native-pixel-colors
```

## Usage

```js
import { setImage, getPixelColor } from 'react-native-pixel-colors';

// Set image to get pixel color from (required)
// Image can be a local file or a remote URL
// Callback is optional but returns image width and height
setImage('https://reactnative.dev/img/tiny_logo.png', (width, height) => {
  console.log(width, height);
});

// Get pixel color at specified coordinates
const hex = await getPixelColor(230, 300);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
