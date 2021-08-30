import React from "react";
import { SafeAreaView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import KiddoCard from "../components/KiddoCard";

export default function KiddosContainer() {
  const dispatch = useDispatch();
  const kiddos = useSelector(state => state);

  const handleDelete = kiddoId => {
    let newKiddos = kiddos.filter(kiddo => kiddo.id !== kiddoId);
    fetch(`https://darndest-be.herokuapp.com/kids/${kiddoId}`, {
      method: "DELETE",
    })
      .then(response => {
        response.status == 202
          ? Alert.alert("Kiddo Vanished")
          : Alert.alert(
              "Ooops..Something went wrong. Please refresh app to continue"
            );
      })
      .then(dispatch({ type: "DELETE_KIDDO", newKiddos }));
  };

  const renderKiddoCards = () => {
    return kiddos.map(kiddo => {
      return (
        <KiddoCard key={kiddo.id} handleDelete={handleDelete} kiddo={kiddo} />
      );
    });
  };

  return <SafeAreaView>{renderKiddoCards()}</SafeAreaView>;
}
