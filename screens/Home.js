import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { useFonts } from "expo-font";

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    "kiddo-font": require("../assets/fonts/ButterflyKids-Regular.ttf"),
    "FatFace-font": require("../assets/fonts/AbrilFatface-Regular.ttf"),
  });

  useEffect(() => {
    fetch("https://darndest-be.herokuapp.com/kids")
      .then(response => response.json())
      .then(kiddos => dispatch({ type: "SET_KIDDOS", kiddos }));
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Image
            style={styles.headerLogo}
            source={require("../assets/Darndest_Logo_short.png")}
          ></Image>
        </SafeAreaView>
        <SafeAreaView style={styles.body}>
          <Text style={styles.bodyText}>
            An App you can use to save the funny stuff your kids say.
          </Text>
          <Text style={styles.bodyText}> Enjoy!</Text>
          <Text style={styles.bodySubText}>Start by pressing below</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.footerNav}>
          <Pressable onPress={() => navigation.navigate("Kiddos")}>
            <Text style={styles.buttonText}>Go To Kiddos</Text>
          </Pressable>
        </SafeAreaView>
        <StatusBar style='auto' />
      </SafeAreaView>
    );
  }
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
  headerLogo: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
  },
  body: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#e0b9e5",
    borderWidth: 15,
    marginHorizontal: 10,
    padding: 2,
    borderRadius: 15,
    borderColor: "#e6c7ea",
    justifyContent: "space-between",
  },
  bodyText: {
    fontSize: 45,
    textAlign: "center",
    fontFamily: "FatFace-font",
    lineHeight: 70,
    letterSpacing: 1,
  },
  bodySubText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "FatFace-font",
    lineHeight: 75,
    letterSpacing: 3,
  },
  footerNav: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#8db7d1",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#81afcc",
  },
  buttonText: {
    fontSize: 65,
    textAlign: "center",
    fontFamily: "kiddo-font",
    lineHeight: 90,
    letterSpacing: 2,
  },
});
