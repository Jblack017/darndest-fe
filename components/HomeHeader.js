import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerLogo}
        source={require("../assets/Darndest_Logo_short.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "20%",
    width: "100%",
  },
  headerLogo: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
  },
});
