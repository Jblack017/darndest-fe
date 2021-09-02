import React from "react";
import { View, ScrollView, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import KiddoNavCard from "../components/KiddoNavCard";

export default function KiddosNavigationContainer() {
  const kiddos = useSelector(state => state.KiddoStore);
  const dispatch = useDispatch();

  const deleteKiddo = kiddo => {
    Alert.alert(
      `Vanish ${kiddo.name}`,
      `This does not remove ${kiddo.name} from your life.`,
      [
        { text: `Keep ${kiddo.name}`, onPress: () => {} },
        {
          text: `Later ${kiddo.name}`,
          onPress: () => {
            let newKiddos = kiddos.filter(kid => kid.id !== kiddo.id);
            fetch(`https://darndest-be.herokuapp.com/kids/${kiddo.id}`, {
              method: "DELETE",
            })
              .then(response => {
                response.status == 202
                  ? Alert.alert(`${kiddo.name} has been vanished.`)
                  : Alert.alert(
                      "Ooops..Something went wrong. Please refresh app to continue"
                    );
              })
              .then(dispatch({ type: "DELETE_KIDDO", newKiddos }));
          },
        },
      ]
    );
  };

  const renderKiddoNavCards = () => {
    return kiddos.map(kiddo => {
      return (
        <KiddoNavCard key={kiddo.id} kiddo={kiddo} deleteKiddo={deleteKiddo} />
      );
    });
  };
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        borderColor: "#4c54bd",
        backgroundColor: "#d2dfee",
      }}
    >
      <ScrollView horizontal={true}>{renderKiddoNavCards()}</ScrollView>
    </View>
  );
}
