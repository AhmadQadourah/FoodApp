import React from "react";
import {useLayoutEffect} from 'react'
import { Button, ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/Meal Details/List";
import Subtitle from "../components/Meal Details/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function DetailsScreen({ route ,navigation}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


function headerButtonPressHandler(){
console.log('Pressed')
}


useLayoutEffect(() => {
  navigation.setOptions({
    headerRight:()=>{ return <IconButton onPress={headerButtonPressHandler}/>  }
  })
}, [navigation,headerButtonPressHandler])


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
<View style= {styles.listContainter}>
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
  listContainter:{
    width:"80%"
  },
  listOuterContainer:{
    alignItems:"center"
  },
  rootContainer:{
    marginBottom:32
  }
});
