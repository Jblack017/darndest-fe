import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import components for navigator due to component file folders.
import Home from "./screens/Home";
import Kiddos from "./screens/Kiddos";

const Stack = createNativeStackNavigator();

const kiddos = (state = [], action) => {
  switch (action.type) {
    case "SET_KIDDOS":
      return action.kiddos;
    default:
      return state;
  }
};

const store = createStore(kiddos);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name='Kiddos'
            component={Kiddos}
            options={{ title: "Your Kiddos" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
