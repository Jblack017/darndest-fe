import React from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";

export default function LoadingIndicator() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size='large' color='#c94277' />
    </SafeAreaView>
  );
}
