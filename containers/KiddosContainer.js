import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import KiddoCard from "../components/KiddoCard";
import { useDispatch } from "react-redux";

export default function KiddosContainer() {
  const dispatch = useDispatch();
  const kiddos = useSelector(state => state);

  const handleDelete = kiddoId => {
    let newKiddos = kiddos.filter(kiddo => kiddo.id !== kiddoId);
    dispatch({ type: "DELETE_KIDDO", newKiddos });
  };

  const renderKiddoCards = () => {
    return kiddos.map(kiddo => {
      return (
        <KiddoCard key={kiddo.id} handleDelete={handleDelete} kiddo={kiddo} />
      );
    });
  };

  return <View>{renderKiddoCards()}</View>;
}
