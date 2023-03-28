import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CaetgoriesScreen from "./screens/CaetgoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverView from "./screens/MealsOverView";
import DetailsScreen from "./screens/DetailsScreen";
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoriteScreen from "./screens/FavoriteScreen";
import {Ionicons} from '@expo/vector-icons'
// import FavoriteContextProvider from "./store/context/favorite-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()


function DrawerNavigator(){
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#33698d" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#33698d" },
        drawerContentStyle: { backgroundColor: "#33698d" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#050909",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CaetgoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {





  return (
    <>
      <StatusBar style="dark" />
      {/* <FavoriteContextProvider > */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#33698d" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#33698d" },
          }}
          >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown:false,
              
            }}
            />
          <Stack.Screen name="MealsOverview" component={MealsOverView} />
          <Stack.Screen
            name="MealsDetails"
            component={DetailsScreen}
            options={{title:'About The Meal'}}
            ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
            </Provider>

        {/* </FavoriteContextProvider> */}
     
    </>
  );
}

const styles = StyleSheet.create({});
