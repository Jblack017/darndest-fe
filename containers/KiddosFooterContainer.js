import React from "react";
import { View, Text } from "react-native";
import AddCommentButton from "../components/AddCommentButton";
import AddKiddoButton from "../components/AddKiddoButton";

export default function KiddosFooter({ selectedKiddo }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 2,
        borderTopRightWidth: 2,
        borderTopLeftWidth: 2,
        borderColor: "#4c54bd",
        backgroundColor: "#b5b8e3",
      }}
    >
      <AddKiddoButton />
      <AddCommentButton selectedKiddo={selectedKiddo} />
    </View>
  );
}
