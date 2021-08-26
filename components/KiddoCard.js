import React from "react";
import { Text } from "react-native";

export default function KiddoCard({ kiddo }) {
  return (
    <>
      <Text>Name: {kiddo.name}</Text>
      {"\n"}
      <Text>age: {kiddo.age}</Text>
    </>
  );
}
