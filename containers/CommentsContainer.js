import React from "react";
import { View, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function CommentsContainer() {
  return (
    <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
      <Pressable>
        <Text>Comments</Text>
      </Pressable>
    </View>
  );
}
