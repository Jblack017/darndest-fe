import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeFooter(props) {
  return (
    <View style={styles.footerNav}>
      <Pressable onPress={() => props.navigation.navigate("Kiddos")}>
        <Text style={styles.buttonText}>Go To Kiddos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footerNav: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "#4c54bd",
    marginHorizontal: 15,
    marginVertical: 25,
    backgroundColor: "#3b429f", //Violet Blue

    elevation: 5,
  },
  buttonText: {
    fontSize: 65,
    textAlign: "center",
    fontFamily: "kiddo-font",
    lineHeight: 90,
    letterSpacing: 2,
  },
});
