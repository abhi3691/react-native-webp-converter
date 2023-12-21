# react-native-webp-converter

Effortlessly convert PNG ,JPG ,jpeg images to highly efficient WebP format in React Native applications with 'react-native-webpng-converter.' This lightweight and user-friendly package empower developers to enhance performance by optimizing image assets, reducing file sizes, and improving loading times. Seamlessly integrate WebP conversion into your React Native projects, unlocking the full potential of efficient image delivery for a smoother user experience.

## Installation

```sh
npm install react-native-webp-converter
```

## Usage

```js
import WebpImage from 'react-native-webp-converter';
import image from './pexels-photo-1379636.jpeg';

// ... all image props supports this will covert your image png,jpg format to webp and show
<WebpImage source={image} style={styles.box} />;
<WebpImage
  source={{
    uri: 'https://t4.ftcdn.net/jpg/06/06/43/39/240_F_606433905_gY2CrrCJH6dQK2RnAnHVnAhURlk2qtqQ.jpg',
  }}
  style={styles.box}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
