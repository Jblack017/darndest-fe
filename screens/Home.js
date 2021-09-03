import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import HomeHeader from "../components/HomeHeader";
import HomeContainer from "../containers/HomeContainer";
import HomeFooter from "../containers/HomeFooter";
import LoadingIndicator from "../components/LoadingIndicator";

export default function Home() {
  const dispatch = useDispatch();
  const [loading, isLoading] = useState(true);

  //grab fonts on initial render
  let [fontsLoaded] = useFonts({
    "kiddo-font": require("../assets/fonts/ButterflyKids-Regular.ttf"),
    "FatFace-font": require("../assets/fonts/AbrilFatface-Regular.ttf"),
    "Playball-font": require("../assets/fonts/Playball-Regular.ttf"),
    "Montserrat-ELI": require("../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
  });

  const fetchKiddos = () => {
    fetch("https://darndest-be.herokuapp.com/kids")
      .then(response => {
        isLoading(!loading);
        if (!response.ok) {
          return Alert.alert("Uh Oh");
        } else {
          return response.json();
        }
      })
      .then(kiddos => {
        isLoading(!loading);
        dispatch({ type: "SET_KIDDOS", payload: kiddos });
      });
  };

  // Grab Kiddos on Initial Render
  useEffect(fetchKiddos, []);

  if (!fontsLoaded || loading) {
    return <LoadingIndicator />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <HomeHeader />
        <HomeContainer />
        <HomeFooter />
        <StatusBar backgroundColor='#C94277' hidden={false} style='auto' />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f0f5", //Lavender Blush
  },
});
