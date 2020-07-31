import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ShowResultsScreen from "./src/screens/ShowResultsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          title: "Member List",
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ShowResults" component={ShowResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
