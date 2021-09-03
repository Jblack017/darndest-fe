import React from "react";

// Redux and Store Components
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

//import stores
import KiddoStore from "./stores/KiddoStore";
import SelectedKiddo from "./stores/SelectedKiddo";
import AddKiddoSwitch from "./stores/AddKiddoSwitch";
import AddCommentSwitch from "./stores/AddCommentSwitch";

// Navigation Components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Kiddos from "./screens/Kiddos";

export default function App() {
  //Access Stack Navigator
  const Stack = createNativeStackNavigator();
  //Combine Stores
  const rootReducer = combineReducers({
    KiddoStore,
    SelectedKiddo,
    AddKiddoSwitch,
    AddCommentSwitch,
  });

  //Create Store from Combined Stores
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
