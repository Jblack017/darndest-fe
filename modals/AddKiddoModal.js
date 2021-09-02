import React from "react";
import {
  SafeAreaView,
  Text,
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector, useDispatch } from "react-redux";

export default function AddKiddoModal({ modalVisible, setModalVisible }) {
  const [name, onChangeName] = React.useState("");
  const [nickname, onChangeNickname] = React.useState("");
  const [kiddoBirthday, setKiddoBirthday] = React.useState(new Date());
  const [datePicker, showDatePicker] = React.useState(false);

  const dispatch = useDispatch();
  const kiddos = useSelector(state => state.KiddoStore);

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

  const formReset = () => {
    onChangeName("");
    onChangeNickname("");
    setKiddoBirthday(new Date());
  };

  const addKiddoToDB = kiddo => {
    if (kiddo.name.length == 0) {
      Alert.alert(
        "Kiddo name and Birthday required.\nPlease check and try again."
      );
    } else {
      fetch(kiddoUrl, options)
        .then(response => response.json())
        .then(kiddo => {
          dispatch({ type: "ADD_KIDDO", newKiddos: [...kiddos, kiddo] });
        })
        .then(() => {
          formReset();
          setModalVisible(false);
        });
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || kiddoBirthday;
    showDatePicker(Platform.OS === "ios");
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
          <Text
            style={{
              fontSize: 45,
              margin: 5,
              fontFamily: "kiddo-font",
              borderBottomWidth: 2,
              borderColor: "white",
            }}
          >
            Add A Kiddo
          </Text>
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
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
            onPress={() => showDatePicker(!datePicker)}
          >
            <Text style={{ fontFamily: "FatFace-font", fontSize: 16 }}>
              Birthday:
            </Text>
            <TextInput
              editable={false}
              style={styles.birthdayInput}
              value={kiddo.birthday}
              onChangeText={onChange}
              placeholder='Kiddo Birthday'
            />
          </Pressable>
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
            onPress={() => addKiddoToDB(kiddo)}
          >
            <Text style={styles.textStyle}>Add Kiddo</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              formReset();
              setModalVisible(false);
            }}
          >
            <Text style={{ ...styles.textStyle, color: "red" }}>Go Back</Text>
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
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 40,
    height: "auto",
    width: "75%",
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
    width: "69%",
    height: 54,
    justifyContent: "center",
    backgroundColor: "#abce9d",
    marginBottom: 15,
  },
  input: {
    height: 35,
    width: "90%",
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
  },
  birthdayInput: {
    height: 35,
    color: "black",
    width: "54%",
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
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
    textAlign: "center",
    fontSize: 24,
    fontFamily: "FatFace-font",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
