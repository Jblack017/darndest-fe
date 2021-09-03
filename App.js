import React from "react";

// Redux and Store Component
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import KiddoStore from "./stores/KiddoStore";
import SelectedKiddo from "./stores/SelectedKiddo";
import AddKiddoSwitch from "./stores/AddKiddoSwitch";

// Navigation Components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Kiddos from "./screens/Kiddos";

const Stack = createNativeStackNavigator();

export default function App() {
  const rootReducer = combineReducers({
    KiddoStore,
    SelectedKiddo,
    AddKiddoSwitch,
  });
  const store = createStore(rootReducer);

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
            options={{ title: "Kiddos" }}
          />

          {/* <Stack.Screen
            name='Kiddo Comments'
            component={KiddoComments}
            options={({ route }) => ({
              title: `${route.params.kiddoName}'s Comments`,
            })}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
