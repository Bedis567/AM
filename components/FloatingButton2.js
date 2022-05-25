import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { adaptToHeight, adaptToWidth } from '../config/Demensions'
import Route from '../navigation/Route'
import Ionicons from "@expo/vector-icons/Ionicons"
const FloatingButton2 = (props) => {
  return (
    <View style={{position:'absolute', alignSelf:'flex-start', paddingTop:adaptToHeight(0.05)}}>
        <TouchableOpacity onPress = {() => props.navigation.navigate(Route.HOME_MALADE)}>
        <Ionicons name={"home"}
          style={{ color: 'black', padding:adaptToHeight(0.03) }}
          size={adaptToWidth(0.09)} />
      </TouchableOpacity>
    </View>
  )
}

export default FloatingButton2

const styles = StyleSheet.create({})