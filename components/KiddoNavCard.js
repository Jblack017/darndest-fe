import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RemoveKiddoButton from "./RemoveKiddoButton";

export default function KiddoNavCard({ kiddo, deleteKiddo }) {
  const dispatch = useDispatch();
  const selectedKiddo = useSelector(state => state.SelectedKiddo === kiddo);

  const backgroundColor = selectedKiddo ? "#f2cfdd" : "#c3c6e9";
  return (
    <Pressable
      style={[styles.kiddoNavCard, { backgroundColor }]}
      onPress={() => dispatch({ type: "SET_SELECTED_KIDDO", payload: kiddo })}
    >
      {!selectedKiddo || (
        <RemoveKiddoButton kiddo={kiddo} deleteKiddo={deleteKiddo} />
      )}
      <Text style={styles.kiddoName}>{kiddo.name}</Text>
      <Text style={styles.kiddoAge}>{kiddo.age} Years Old</Text>
      <Text style={styles.kiddoCommentsCount}>
        {kiddo.comments.count || 0} Comments
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  kiddoNavCard: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    width: 150,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#c3c6e9",
  },
  kiddoName: {
    color: "#c94277", //Fuchsia Rose
    fontFamily: "kiddo-font",
    fontSize: 36,
  },
  kiddoAge: {
    color: "#424bb3", //Violet Blue
    fontFamily: "FatFace-font",
    fontSize: 16,
  },
  kiddoCommentsCount: {
    color: "#424bb3", //Violet Blue
    fontFamily: "FatFace-font",
    fontSize: 12,
  },
});
