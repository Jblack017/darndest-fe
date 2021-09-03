import React from "react";
import { View, StyleSheet } from "react-native";
import AddCommentButton from "../components/AddCommentButton";
import AddKiddoButton from "../components/AddKiddoButton";

export default function KiddosFooter() {
  return (
    <View style={styles.kiddoFooter}>
      <AddKiddoButton />
      <AddCommentButton />
    </View>
  );
}

const styles = StyleSheet.create({
  kiddoFooter: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: "#4c54bd",
    backgroundColor: "#b5b8e3",
  },
});
