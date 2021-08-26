import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://darndest-be.herokuapp.com/kids")
      .then(response => response.json())
      .then(kiddos => dispatch({ type: "SET_KIDDOS", kiddos }));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/Darndest_Logo_short.png")}
        ></Image>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 50, textAlign: "center" }}>
          Darndest is an App used to save the funny shit your kids say. Enjoy!
        </Text>
      </View>
      <View style={styles.footerNav}>
        <Text style={{ textAlign: "center" }}>
          <Pressable onPress={() => navigation.navigate("Kiddos")}>
            <Text>Go To Kiddos</Text>
          </Pressable>
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "20%",
    width: "100%",
  },
  body: {
    alignItems: "center",
    height: "70%",
    backgroundColor: "#fff",
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
  footerNav: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    backgroundColor: "#fff",
    borderWidth: 5,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  logo: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
  },
});
