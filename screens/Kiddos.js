import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import KiddosFooter from "../components/KiddosFooter";
import KiddosContainer from "../containers/KiddosContainer";

export default function Kiddos(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <KiddosContainer {...props} />
      </ScrollView>
      <KiddosFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  contentContainer: {
    flex: 1,
  },
});
