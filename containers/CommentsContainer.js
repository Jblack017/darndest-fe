import React from "react";
import { View, ScrollView, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import KiddoCommentCard from "../components/KiddoCommentCard";

export default function CommentsContainer() {
  const kiddoComments = useSelector(state =>
    state.KiddoStore.flatMap(kiddo => kiddo.comments)
  );

  const selectedKiddoComments = useSelector(
    state => state.SelectedKiddo.comments
  );

  const renderKiddoComments = () => {
    if (selectedKiddoComments) {
      return selectedKiddoComments.map(comment => {
        return <KiddoCommentCard key={comment.id} comment={comment} />;
      });
    }
    return kiddoComments.map(comment => {
      return <KiddoCommentCard key={comment.id} comment={comment} />;
    });
  };

  return (
    <View
      style={{
        flex: 10,
      }}
    >
      <ScrollView
        style={{ width: "100%" }}
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
