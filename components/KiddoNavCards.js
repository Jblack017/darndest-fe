import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function KiddoNavCards({ navigation }) {
  const kiddos = useSelector(state => state);

  return kiddos.map(kiddo => {
    return (
      <Pressable
        onPress={() => navigation.navigate("Kiddo Comments")}
        style={styles.kiddoNavCard}
        key={kiddo.id}
      >
        <Text style={styles.kiddoName}>{kiddo.name}</Text>
        <Text>{kiddo.age} Years Old</Text>
        <Text>{kiddo.comments.count || 0} Comments</Text>
      </Pressable>
    );
  });
}

const styles = StyleSheet.create({
  kiddoNavCard: {
    flex: 0,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    width: 150,
    borderWidth: 1,
  },
  kiddoName: {
    color: "red",
    fontFamily: "kiddo-font",
    fontSize: 36,
  },
});
