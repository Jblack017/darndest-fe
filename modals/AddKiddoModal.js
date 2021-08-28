import React from "react";
import {
  SafeAreaView,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddKiddoModal({ modalVisible, setModalVisible }) {
  const [text, onChangeText] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [kiddoBirthday, setKiddoBirthday] = React.useState(new Date());

  const [month, day, year] = [
    kiddoBirthday.getMonth() + 1,
    kiddoBirthday.getDate(),
    kiddoBirthday.getFullYear(),
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || kiddoBirthday;
    setShow(Platform.OS === "ios");
    setKiddoBirthday(currentDate);
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <SafeAreaView style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Kiddo Name'
          />
          <SafeAreaView>
            <SafeAreaView>
              <Button onPress={() => setShow(true)} title='Add Birthday' />
            </SafeAreaView>

            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={kiddoBirthday}
                mode='date'
                display='spinner'
                onChange={onChange}
              />
            )}
          </SafeAreaView>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>
              {month + "/" + day + "/" + year}
            </Text>
            <Text style={styles.textStyle}>Add Kiddo</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Go Back</Text>
          </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
