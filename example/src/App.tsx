import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import WebpImage from 'react-native-webp-converter';
import image from './pexels-photo-1379636.jpeg';
export default function App() {
  return (
    <View style={styles.container}>
      <WebpImage source={image} style={styles.box} />
      <WebpImage
        source={{
          uri: 'https://images.unsplash.com/photo-1701986789884-f9d5a9bcf71d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjU5NTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDMxNzYzMzl8&ixlib=rb-4.0.3&q=85',
        }}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
  },
});
