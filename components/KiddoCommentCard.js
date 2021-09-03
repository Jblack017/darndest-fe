import React from "react";
import { View, Text } from "react-native";

export default function KiddoCommentCard({ comment }) {
  return (
    <View
      style={{
        height: "auto",
        width: "87%",
        borderWidth: 2,
        borderRadius: 50,
        margin: 5,
        backgroundColor: "#fff",
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontFamily: "Playball-font",
          padding: 2,
          width: "100%",
          textAlign: "center",
        }}
      >
        {comment.content}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Montserrat-ELI",
          padding: 2,
          width: "100%",
          textAlign: "center",
        }}
      >
        {comment.quoted}
      </Text>
    </View>
  );
}
