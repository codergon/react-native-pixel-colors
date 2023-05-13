import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { setImage, getPixelColor } from 'react-native-pixel-colors';

export default function App() {
  const TEST_IMAGE_URI = 'https://reactjs.org/logo-og.png';

  const getColors = async () => {
    setImage(TEST_IMAGE_URI, (width, height) => {
      console.log('Image Dimensions: ', width, height);
    });
    getPixelColor(0, 0).then((color) => {
      console.log(`Color at ${0}, ${0}: `, color);
    });
  };
  React.useEffect(() => {
    getColors();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Test Image</Text>
      <Image source={{ uri: TEST_IMAGE_URI }} style={styles.image} />
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
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    width: 400,
    height: 400,
  },
});
