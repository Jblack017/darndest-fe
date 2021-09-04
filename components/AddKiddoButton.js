import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

export default function AddKiddoButton() {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.button}
      onPress={() => dispatch({ type: "IS_ADD_KIDDO_OPEN", payload: true })}
    >
      <Text style={styles.buttonText}>Add Kiddo</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#cdf6ef",
    justifyContent: "center",
    height: 40,
    margin: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#2fda96",
    elevation: 5,
  },
  buttonText: { fontFamily: "FatFace-font" },
});
