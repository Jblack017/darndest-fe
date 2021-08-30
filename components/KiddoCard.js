import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";

export default function KiddoCard({ kiddo, handleDelete }) {
  return (
    <SafeAreaView
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
      <Text
        style={{ fontWeight: "bold", paddingBottom: 5, textAlign: "center" }}
      >
        {kiddo.age} years old
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        Darndest quote: "FAV QUOTE HERE "there once was a man from nantucket, he
        had a good wife, he loved here""
      </Text>
      <View style={styles.deleteButton}>
        <Button
          title='X'
          color='#ff0000'
          onPress={() => handleDelete(kiddo.id)}
        />
      </View>
      <View style={styles.commentsButton}>
        <Button
          title={`${kiddo.name}'s comments`}
          color='#0000ff'
          onPress={() => handleDelete(kiddo.id)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  commentsButton: {
    flex: 1,
    paddingHorizontal: "25%",
    backgroundColor: "#fff",
  },
  deleteButton: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: 5,
  },
});
