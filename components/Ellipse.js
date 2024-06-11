import * as React from "react";
import { StyleSheet, View } from "react-native";

const Ellipse = () => {
  return <View style={styles.ellipseView} />;
};

const styles = StyleSheet.create({
  ellipseView: {
    backgroundColor: "rgba(255, 127, 0, 0.1)",
    width: 200,
    height: 200,
  },
});

export default Ellipse;
