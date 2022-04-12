import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import GuestStack from './navigation/GuestStack'

const AppContainer = () => {
  return (
    <NavigationContainer>
     <GuestStack/>
    </NavigationContainer>
  )
}

export default AppContainer

const styles = StyleSheet.create({})