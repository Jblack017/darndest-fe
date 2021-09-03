import React from "react";
import { Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AddCommentModal from "../modals/AddCommentModal";

export default function AddCommentButton() {
  const selectedKiddo = useSelector(state => state.SelectedKiddo);
  const setOpacity = selectedKiddo.id ? 1 : 0.35;
  const buttonText = selectedKiddo.id ? "Add Comment" : "Select A Kiddo First";

  const dispatch = useDispatch();

  return (
    <>
      <AddCommentModal />
      <Pressable
        onPress={() => dispatch({ type: "IS_ADD_COMMENT_OPEN", payload: true })}
        disabled={!selectedKiddo.id}
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
          opacity: setOpacity,
          elevation: 5,
        }}
      >
        <Text style={{ fontFamily: "FatFace-font" }}>{buttonText}</Text>
      </Pressable>
    </>
  );
}
