import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export default function Kiddos() {
  const kiddos = useSelector(state => state);

  const renderKiddoNames = () => {
    return kiddos.map(kiddo => {
      return <Text key={kiddo.id}>{kiddo.name}</Text>;
    });
  };
  return (
    <View>
      <Text>Kiddos</Text>
      {renderKiddoNames()}
    </View>
  );
}
