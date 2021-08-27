import React from "react";
import { View, Button, StyleSheet } from "react-native";
import KiddosContainer from "../containers/KiddosContainer";

export default function Kiddos() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <KiddosContainer />
      </View>
      <View style={styles.button}>
        <Button title='Add Kiddo' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  contentContainer: {
    flex: 1,
  },
  footer: {
    height: 100,
  },
  button: {
    alignSelf: "center",
    marginBottom: 10,
  },
});
