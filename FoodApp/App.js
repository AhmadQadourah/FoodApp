import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CaetgoriesScreen from "./screens/CaetgoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverView from "./screens/MealsOverView";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#33698d" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#33698d" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CaetgoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverView}
          />
          <Stack.Screen name="MealsDetails" component={DetailsScreen}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
