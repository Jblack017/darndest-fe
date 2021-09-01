import React, { useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import AddCommentModal from "../modals/AddCommentModal";

export default function KiddoComments({ route }) {
  const kiddos = useSelector(state => state);
  const kiddo = kiddos.find(kiddo => kiddo.id == route.params.kiddoId);
  const [modalVisible, setModalVisible] = useState(true);

  const renderKiddoNavCards = () => {
    return kiddos.map(kiddo => {
      return (
        <Pressable
          onPress={() => {
            console.log("Handle This");
          }}
          style={styles.kiddoNavCards}
          key={kiddo.id}
        >
          <Text style={styles.kiddoName}>{kiddo.name}</Text>
          <Text>{kiddo.age} Years Old</Text>
          <Text>{kiddo.comments.count || 0} Comments</Text>
        </Pressable>
      );
    });
  };

  const renderKiddoComments = () => {
    return kiddo.comments.map(comment => {
      return <Text key={comment.id}>{comment.content}</Text>;
    });
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <SafeAreaView style={styles.kiddosHorizontalList}>
        <ScrollView horizontal={true}>{renderKiddoNavCards()}</ScrollView>
      </SafeAreaView>
      <SafeAreaView style={styles.body}>
        <Text>Body</Text>
        {renderKiddoComments()}
      </SafeAreaView>
      <SafeAreaView style={styles.navigation}>
        <Text>
          <Pressable
            style={styles.addCommentButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text>Add Comment</Text>
          </Pressable>
        </Text>
        <AddCommentModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  kiddosHorizontalList: {
    height: "15%",
    width: "100%",
    borderWidth: 1,
  },
  kiddoNavCards: {
    flex: 0,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    width: 150,
    borderWidth: 1,
  },
  kiddoName: {
    color: "red",
    fontFamily: "kiddo-font",
    fontSize: 36,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  navigation: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
