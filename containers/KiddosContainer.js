import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import KiddoCard from "../components/KiddoCard";

export default function KiddosContainer() {
  const kiddos = useSelector(state => state);

  const renderKiddoCards = () => {
    return kiddos.map(kiddo => {
      return <KiddoCard kiddo={kiddo} />;
    });
  };
  return <View>{renderKiddoCards}</View>;
}
