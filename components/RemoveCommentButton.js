import React from "react";
import { Pressable, Text } from "react-native";

export default function RemoveCommentButton({ kiddo, deleteKiddo }) {
  return (
    <Pressable onPress={() => deleteKiddo(kiddo)} style={KiddoButtonStyle}>
      <Text style={{ fontFamily: "FatFace-font" }}>X</Text>
    </Pressable>
  );
}

const KiddoButtonStyle = {
  position: "absolute",
  alignSelf: "flex-end",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#c94277",
  borderColor: "#c3c6e9",
  borderWidth: 2,
  borderRadius: 50,
  height: 25,
  width: 25,
};
