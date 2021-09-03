import React from "react";
import { Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import AddKiddoModal from "../modals/AddKiddoModal";

export default function AddKiddoButton() {
  const dispatch = useDispatch();
  return (
    <>
      <AddKiddoModal />
      <Pressable
        onPress={() => dispatch({ type: "OPEN_ADD_KIDDO", payload: true })}
        style={{
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
        }}
      >
        <Text style={{ fontFamily: "FatFace-font" }}>Add Kiddo</Text>
      </Pressable>
    </>
  );
}
