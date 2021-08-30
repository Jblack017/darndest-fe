import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from "react-native";

export default function KiddoCard({ kiddo, handleDelete, navigation }) {
  const deleteKiddoAlert = kiddo => {
    Alert.alert(
      `Vanish ${kiddo.name}`,
      `This does not remove ${kiddo.name} from your life.`,
      [
        { text: `Keep ${kiddo.name}`, onPress: () => {} },
        { text: `Later ${kiddo.name}`, onPress: () => handleDelete(kiddo) },
      ]
    );
  };
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
          onPress={() => deleteKiddoAlert(kiddo)}
        />
      </View>
      <View style={styles.commentsButton}>
        <Button
          title={`${kiddo.name}'s comments`}
          color='#0000ff'
          onPress={() => navigation.navigate("Home")}
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
