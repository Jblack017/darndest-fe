import React from "react";
import { View, Text } from "react-native";

export default function KiddoCommentCard({ comment }) {
  return (
    <View
      style={{
        height: "auto",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 50,
        margin: 5,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 30, fontFamily: "kiddo-font", padding: 2 }}>
        {comment.content}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "FatFace-font",
          padding: 2,
        }}
      >
        {comment.quoted}
      </Text>
    </View>
  );
}
