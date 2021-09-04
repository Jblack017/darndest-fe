import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function AddCommentButton() {
  const selectedKiddo = useSelector(state => state.SelectedKiddo);
  const opacity = selectedKiddo.id ? 1 : 0.35;
  const buttonText = selectedKiddo.id ? "Add Comment" : "Select A Kiddo First";

  const dispatch = useDispatch();

  return (
    <Pressable
      style={[styles.button, { opacity }]}
      disabled={!selectedKiddo.id}
      onPress={() => dispatch({ type: "IS_ADD_COMMENT_OPEN", payload: true })}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
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
