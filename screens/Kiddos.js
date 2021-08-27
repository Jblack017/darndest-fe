import React, { useState } from "react";
import { View, Text, Pressable, Button, StyleSheet, Modal } from "react-native";
import KiddosContainer from "../containers/KiddosContainer";
import AddKiddoModal from "../modals/AddKiddoModal";

export default function Kiddos() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <KiddosContainer />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.buttonText}>Add A Kiddo</Text>
      </Pressable>
      <AddKiddoModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  contentContainer: {
    flex: 1,
  },
  button: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#bbd7b0",
    elevation: 1,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#abce9d",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 45,
    fontFamily: "kiddo-font",
  },
});
