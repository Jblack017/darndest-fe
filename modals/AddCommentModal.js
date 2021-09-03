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

export default function AddCommentModal({ modalVisible, setModalVisible }) {
  const selectedKiddo = useSelector(state => state.SelectedKiddo);

  const [comment, onChangeComment] = React.useState("");
  const [commentDate, setCommentDate] = React.useState(new Date());
  const [datePicker, showDatePicker] = React.useState(false);

  //pull month date and year strings out of the date object
  const [month, day, year] = [
    commentDate.getMonth() + 1,
    commentDate.getDate(),
    commentDate.getFullYear(),
  ];

  //Need to send Post with CommentDate format of yyy-mm-dd
  const commentsUrl = "https://darndest-be.herokuapp.com/comments";
  const kiddoComment = {
    kiddo_id: selectedKiddo.id,
    content: comment,
    quoted: `${year + "-" + month + "-" + day}`,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(kiddoComment),
  };

  const addKiddoCommentToDB = () => {
    if (comment.length == 0) {
      Alert.alert("Kiddo comment required.\nPlease check and try again.");
    } else {
      fetch(commentsUrl, options)
        .then(response => response.json())
        .then(console.log)
        .then(setModalVisible(false));
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || commentDate;
    showDatePicker(Platform.OS === "ios");
    setCommentDate(currentDate);
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
            Add Comment
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            autoFocus={true}
            value={comment}
            autoCorrect={false}
            placeholder={`'"Add A Comment for ${selectedKiddo.name}"'`}
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
              Quoted Date:
            </Text>
            <TextInput
              editable={false}
              style={styles.birthdayInput}
              value={kiddoComment.quoted}
              onChangeText={onChange}
            />
          </Pressable>
          {datePicker && (
            <DateTimePicker
              testID='dateTimePicker'
              value={commentDate}
              mode='date'
              display='spinner'
              onChange={onChange}
            />
          )}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => addKiddoCommentToDB()}
          >
            <Text style={styles.textStyle}>Add Comment</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
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
    height: 125,
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
