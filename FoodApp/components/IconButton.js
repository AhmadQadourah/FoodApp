import React from 'react'
import { Pressable } from 'react-native'

import {Ionicons} from '@expo/vector-icons'
function IconButton({ onPress, mealIsFavorite }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons  name="star" size={24} color={"white"} />
    </Pressable>
  );
}

export default IconButton