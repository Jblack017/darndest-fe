import React from "react";

// Redux and Store Component
import { Provider } from "react-redux";
import { createStore } from "redux";
import KiddoStore from "./stores/KiddoStore";

const store = createStore(KiddoStore);

// Navigation Components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Kiddos from "./screens/Kiddos";

const Stack = createNativeStackNavigator();

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
            options={{ title: "My Kiddos" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
