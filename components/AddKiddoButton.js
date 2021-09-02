import React from "react";
import { Pressable, Text } from "react-native";
import AddKiddoModal from "../modals/AddKiddoModal";

export default function AddKiddoButton() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <AddKiddoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
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
        }}
      >
        <Text style={{ fontFamily: "FatFace-font" }}>Add Kiddo</Text>
      </Pressable>
    </>
  );
}
