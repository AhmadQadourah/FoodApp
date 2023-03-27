import React, { useLayoutEffect } from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'
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






function renderMealItem(itemData) {

const item = itemData.item

const mealItemProps={
  id:item.id,
title: item.title,
imageUrl: item.imageUrl,
duration:item.duration,
complexity:item.complexity,
affordability:item.affordability
}

  return <MealItem {...mealItemProps}/>
}



  return (
<View> 
<FlatList data={displayedMeals} keyExtractor={(item)=>{item.id}} renderItem={renderMealItem}/></View>
  )
}

export default MealsOverView


const styles= StyleSheet.create({
  container:{ 
    flex:1,
    padding:16
  }
})