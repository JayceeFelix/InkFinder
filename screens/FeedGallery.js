import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, StyleSheet, View, ScrollView } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FeedGallery() {
  return (
    <View style={styles.container}>
      <Image
      style={styles.Image}
        source={require('../feed_photos/image_1.png')}
      />
      <Image
      style={styles.Image}
        source={require('../feed_photos/image_2.png')}
      />
      <Image
      style={styles.Image}
        source={require('../feed_photos/image_3.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    maxHeight: windowHeight / 2,
    maxWidth: windowWidth - 50,
    margin: 30
  }
});
