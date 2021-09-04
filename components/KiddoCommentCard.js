import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function KiddoCommentCard({ comment }) {
  const selectedComment = useSelector(state => state.SelectedComment);
  const dispatch = useDispatch();

  const isSelected = selectedComment.id == comment.id;
  const backgroundColor = isSelected ? "#7e7bb8" : "#d9beef";
  const borderColor = isSelected ? "#3e5dcf" : "#605178";

  return (
    <Pressable
      style={[styles.card, { backgroundColor, borderColor }]}
      onPress={() =>
        dispatch({ type: "SET_SELECTED_COMMENT", payload: comment })
      }
    >
      <Text style={styles.contentText}>{comment.content}</Text>
      <Text style={styles.quotedText}>{comment.quoted}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "auto",
    width: "87%",
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 2,
    marginBottom: 17,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    elevation: 5,
  },
  contentText: {
    fontSize: 25,
    fontFamily: "Playball-font",
    padding: 2,
    width: "100%",
    textAlign: "center",
  },
  quotedText: {
    fontSize: 12,
    fontFamily: "Montserrat-ELI",
    padding: 2,
    width: "100%",
    textAlign: "center",
  },
});
