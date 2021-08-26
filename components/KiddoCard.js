import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function KiddoCard({ kiddo }) {
  return (
    <View
      style={{
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 20,
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 26 }}>
        {kiddo.name}
      </Text>
      <Text style={{ fontWeight: "bold", paddingBottom: 5 }}>
        {kiddo.age} years old
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        Favorite quote: "FAV QUOTE HERE "there once was a man from nantucket, he
        had a good wife, he loved here""
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
