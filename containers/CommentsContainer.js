import React from "react";
import { View, ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import KiddoCommentCard from "../components/KiddoCommentCard";

export default function CommentsContainer() {
  const kiddoComments = useSelector(state =>
    state.KiddoStore.flatMap(kiddo => kiddo.comments)
  );

  const kiddos = useSelector(state => state.KiddoStore);

  const dispatch = useDispatch();

  const selectedKiddo = useSelector(state => state.SelectedKiddo);
  const selectedKiddoComments = selectedKiddo.comments;

  const deleteComment = comment => {
    Alert.alert(
      `Vanish comment`,
      `This does not remove comment from your life.`,
      [
        { text: `Keep comment`, onPress: () => {} },
        {
          text: `Later comment`,
          onPress: () => {
            let newKiddos = kiddos.map(kid => {
              return {
                id: kid.id,
                age: kid.age,
                name: kid.name,
                nickname: kid.nickname,
                birthday: kid.birthday,
                comments: kid.comments.filter(
                  kidComment => kidComment.id !== comment.id
                ),
              };
            });

            let newSelectedKiddo = {
              id: selectedKiddo.id,
              age: selectedKiddo.age,
              name: selectedKiddo.name,
              nickname: selectedKiddo.nickname,
              birthday: selectedKiddo.birthday,
              comments: selectedKiddo.comments.filter(
                kidComment => kidComment.id !== comment.id
              ),
            };
            fetch(`https://darndest-be.herokuapp.com/comments/${comment.id}`, {
              method: "DELETE",
            })
              .then(response => {
                response.status == 202
                  ? Alert.alert(`comment vanished.`)
                  : Alert.alert(
                      "Ooops..Something went wrong. Please refresh app to continue"
                    );
              })
              .then(() => {
                dispatch({ type: "REMOVE_KIDDO_COMMENT", payload: newKiddos });
                dispatch({
                  type: "SET_SELECTED_KIDDO",
                  payload: newSelectedKiddo,
                });
              });
          },
        },
      ]
    );
  };

  const renderKiddoComments = () => {
    if (selectedKiddoComments) {
      return selectedKiddoComments.map(comment => {
        return (
          <KiddoCommentCard
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
          />
        );
      });
    }
    return kiddoComments.map(comment => {
      return (
        <KiddoCommentCard
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
        />
      );
    });
  };

  return (
    <View
      style={{
        flex: 10,
      }}
    >
      <ScrollView
        style={{ width: "100%", padding: 5 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderKiddoComments()}
      </ScrollView>
    </View>
  );
}
