import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeContainer() {
  return (
    <View style={styles.body}>
      <Text style={styles.bodyText}>
        An App you can use to save the funny stuff your kids say.
      </Text>
      <Text style={styles.bodyText}> Enjoy!</Text>
      <Text style={styles.bodySubText}>Start by pressing below</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f2cd60",
    borderWidth: 15,
    marginHorizontal: 30,
    padding: 2,
    borderRadius: 30,
    borderStyle: "dotted",
    borderColor: "#fdf9ec",
    justifyContent: "space-between",
    elevation: 5,
  },
  bodyText: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "FatFace-font",
    lineHeight: 70,
    letterSpacing: 1,
  },
  bodySubText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "FatFace-font",
    lineHeight: 75,
    letterSpacing: 3,
  },
});
