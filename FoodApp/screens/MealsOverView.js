import React, { useLayoutEffect } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'
import MealsList from '../components/MealsList'
import { MEALS ,CATEGORIES} from '../data/dummy-data'



function MealsOverView({route,navigation}) {

const catId = route.params.categoryId

const displayedMeals=MEALS.filter((mealItem)=>{
  return mealItem.categoryIds.indexOf(catId)>=0;
})

useLayoutEffect(() => {

 const categoryTitle = CATEGORIES.find(
   (category) => category.id === catId
 ).title;

 navigation.setOptions({
   title: categoryTitle,
 });
}, [catId,navigation])


return(
  <MealsList items={displayedMeals}/>
)

}

export default MealsOverView

