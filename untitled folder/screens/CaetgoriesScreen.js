import React from 'react'
import { Text, View , FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from "../data/dummy-data"




function CategoriesScreen({navigation}) {

  


  function renderCategoryItem(itemData) {


function onPressHandler() {
  navigation.navigate("MealsOverview", {
    categoryId: itemData.item.id,
  });
}
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList data={CATEGORIES}  keyExtractor={item=>{item.id}} renderItem={renderCategoryItem} numColumns={2}/>
    </View>
  );
}

export default CategoriesScreen