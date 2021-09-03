import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import CommentsContainer from "../containers/CommentsContainer";
import KiddosFooterContainer from "../containers/KiddosFooterContainer";
import KiddosNavigationContainer from "../containers/KiddosNavigationContainer";

export default function Kiddos() {
  return (
    <KeyboardAvoidingView
      style={styles.kiddoScreen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
    >
      <KiddosNavigationContainer />
      <CommentsContainer />
      <KiddosFooterContainer />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  kiddoScreen: {
    flex: 1,
    backgroundColor: "#eefcf6",
  },
});
