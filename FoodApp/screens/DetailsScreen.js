import React, { useContext } from "react";
import { useLayoutEffect } from "react";
import { Button, ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../components/IconButton";
import List from "../components/Meal Details/List";
import Subtitle from "../components/Meal Details/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
// import { FavoriteContext } from "../store/context/favorite-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function DetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const favoriteMealsIds = useSelector((state) => state.favoritesReducer.ids);

  // const favoriteMealCtx= useContext(FavoriteContext);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealCtx.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={changeFavoriteStatusHandler} />;
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainter}>
          <Subtitle> Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle> Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  listContainter: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
});
