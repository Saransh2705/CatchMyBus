import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const MYBUSPNG = () => {
  return (
    <ImageBackground
      style={styles.myBusPng}
      resizeMode="cover"
      source={require("../assets/mybuspng.png")}
    />
  );
};

const styles = StyleSheet.create({
  myBusPng: {
    width: 255,
    height: 250,
  },
});

export default MYBUSPNG;
