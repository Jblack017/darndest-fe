import React from "react";
import {
  SafeAreaView,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector, useDispatch } from "react-redux";

export default function AddKiddoModal({ modalVisible, setModalVisible }) {
  const [name, onChangeName] = React.useState("");
  const [nickname, onChangeNickname] = React.useState("");
  const [kiddoBirthday, setKiddoBirthday] = React.useState(new Date());
  const [datePicker, showDatePicker] = React.useState(false);

  const dispatch = useDispatch();
  const kiddos = useSelector(state => state);

  const [month, day, year] = [
    kiddoBirthday.getMonth() + 1,
    kiddoBirthday.getDate(),
    kiddoBirthday.getFullYear(),
  ];

  //Need to send Post with kiddoBirthday format of yyy-mm-dd
  const kiddoUrl = "https://darndest-be.herokuapp.com/kids";
  const kiddo = {
    name: name,
    nickname: nickname,
    birthday: `${year + "-" + month + "-" + day}`,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(kiddo),
  };

  const addKiddoToDB = () => {
    fetch(kiddoUrl, options)
      .then(response => response.json())
      .then(kiddo => {
        dispatch({ type: "ADD_KIDDO", newKiddos: [...kiddos, kiddo] });
      })
      .then(setModalVisible(false));
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || kiddoBirthday;
    showDatePicker(Platform.OS === "ios");
    setKiddoBirthday(currentDate);
  };

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <SafeAreaView style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            autoCorrect={false}
            placeholder='Kiddo Name'
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNickname}
            value={nickname}
            autoCorrect={false}
            placeholder='Kiddo Nickname'
          />
          <TextInput
            style={styles.input}
            value={`${month + "-" + day + "-" + year}`}
            onChangeText={onChange}
            placeholder={kiddo.birthday}
            onFocus={() => showDatePicker(!datePicker)}
          />
          {datePicker && (
            <DateTimePicker
              testID='dateTimePicker'
              value={kiddoBirthday}
              mode='date'
              display='spinner'
              onChange={onChange}
            />
          )}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => addKiddoToDB()}
          >
            <Text style={styles.textStyle}>Add Kiddo</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
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
    alignItems: "center",
    marginVertical: 70,
    marginHorizontal: 35,
  },
  modalView: {
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 35,
    height: "100%",
    width: "100%",
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
