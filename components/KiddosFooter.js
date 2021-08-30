import React, { useState } from "react";
import { SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import AddKiddoModal from "../modals/AddKiddoModal";

export default function KiddosFooter() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonText}>Add A Kiddo</Text>
        </Pressable>
      </SafeAreaView>
      <AddKiddoModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#bbd7b0",
    elevation: 1,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#abce9d",
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 45,
    fontFamily: "kiddo-font",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#000000",
  },
});
