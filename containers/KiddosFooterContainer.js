import React from "react";
import { View, StyleSheet } from "react-native";
import AddCommentButton from "../components/AddCommentButton";
import AddKiddoButton from "../components/AddKiddoButton";
import AddCommentModal from "../modals/AddCommentModal";
import AddKiddoModal from "../modals/AddKiddoModal";

export default function KiddosFooter() {
  return (
    <View style={styles.kiddoFooter}>
      <AddKiddoButton />
      <AddKiddoModal />
      <AddCommentButton />
      <AddCommentModal />
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
