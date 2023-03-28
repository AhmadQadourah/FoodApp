import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data'
// import { FavoriteContext } from '../store/context/favorite-context'

function FavoriteScreen() {


  const favoriteMealsIds = useSelector((state) => state.favoritesReducer.ids);

  // const favoriteMealCtx=useContext(FavoriteContext)


const favMeals= MEALS.filter((meal)=>favoriteMealsIds.includes(meal.id))


if(favMeals.length===0){
  return <View style={styles.rootContainer}>
    <Text style={styles.text}>You have no favorite meals yet ....</Text>
  </View>
}

  return (
<MealsList items={favMeals}/>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text : {
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})